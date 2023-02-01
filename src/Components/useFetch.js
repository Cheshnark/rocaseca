import { useEffect, useState } from "react";

const useWeatherFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const abortCont = new AbortController();
        const options = {
            method: 'GET',
        };

        fetch(url, options, {signal:abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch data from that source');
            }
            return res.json();
        })
        .then (data => {
            setWeather(data.results);
            setPending(false);
            setError(null)
        })
        .catch(err => {
            console.log(err);
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setPending(false);
                setError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url]);

    return{data, pending, error};
}

export default useWeatherFetch;