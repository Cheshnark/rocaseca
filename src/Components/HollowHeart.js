import { useUsersContext } from "../hooks/useUsersContext";


const HollowHeart = (props) => {
    const { user } = useUsersContext();
    let cragId = props.crag._id;

    const favClickAdd = (cragId) =>{
        const fetchCragsList = async () => {
            // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
            const response = await fetch(`logged/favorite-crags/${cragId}`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
            });
            const json = await response.json();
            
            if(response.ok){
                console.log(json.favorites);
            }
          }
    
          if(user) {
              fetchCragsList()
          }
    };

    return (
        <i className="fav-icon fa-regular fa-heart" onClick={() => favClickAdd(cragId)}></i>
    )
}

export default HollowHeart;