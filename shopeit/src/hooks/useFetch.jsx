import  { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);

      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return {data, loading, error };
};

export default useFetch;