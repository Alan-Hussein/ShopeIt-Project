import { useEffect, useState } from "react";

const useFetchCart = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
        const updatedData = response.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setData(updatedData);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [urls]);
  console.log(data);
  return { data, loading, error };
};

export default useFetchCart;
