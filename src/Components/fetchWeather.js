export const fetchToday =  (cragId) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://rocaseca-server-production.up.railway.app/main/crags/current-weather/` + cragId , false);  
  request.send(null);

  if (request.status === 200) {
      return true;
  }else {
      return false
  }
}