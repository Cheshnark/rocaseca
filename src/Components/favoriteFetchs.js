export const fetchFavorite = async (cragId, user, method) => {
    const response = await fetch(`https://rocaseca-server-production.up.railway.app/logged/favorite-crags/${cragId}`, {
      method: method,
      headers: {
          'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }