import { useState, useEffect } from "react";
import axios from "axios";
const UseFetchData = (url) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData(url) {
      setIsLoading(true);
      try {
        let res = await axios.get(url);
        setDataFetch(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    }
    fetchData(url);
  }, [url]);
  return [dataFetch, isLoading];
};

export default UseFetchData;
