const fetchDelete = async (cragId, user) => {
    const response = await fetch(`https://rocaseca-server-production.up.railway.app/logged/favorite-crags/${cragId}`, {
      method: 'DELETE',
      headers: {
          'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }

  const fetchAdd = async (cragId, user) => {
    const response = await fetch(`https://rocaseca-server-production.up.railway.app/logged/favorite-crags/${cragId}`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    
    if(response.ok){
        return json
    }
  }

  export {fetchDelete, fetchAdd};