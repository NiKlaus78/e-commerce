import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    
    
    const [data, setData] = useState([]);
    useEffect(() => {

        // fetch(url)
        // .then((res) => res.json())
        // .then((data) => setData(data));
        axios.get(url).then((res) => setData(res.data));
    }, [url])
    
  return data;
}

export default useFetch