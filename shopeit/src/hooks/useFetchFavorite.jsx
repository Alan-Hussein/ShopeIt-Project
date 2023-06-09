import { useEffect, useState } from "react";

const useFetchFavorite = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof urls === "undefined") {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
        setData(response);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [urls]);

  return { data, loading, error };
};

export default useFetchFavorite;
