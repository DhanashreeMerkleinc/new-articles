import { useState, useEffect } from 'react';
import { getRequest } from '../utils/api-handler';

const useFetchArticles = (apiUrl: string) => {
  const [data, setData] = useState<any[]>([]); // Adjust the type as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await getRequest(apiUrl);
        setData(resData.results); // Assuming 'results' is the key containing the articles
        setLoading(false);
      } catch (error) {
        setError("Error loading articles");
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};

export default useFetchArticles;
