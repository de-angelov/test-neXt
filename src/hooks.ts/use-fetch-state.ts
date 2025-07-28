import { useState, useEffect } from 'react';

export const useFetchState = <T,>({ url, initVal }: {url: string, initVal: T }) => {
  const [data, setData] = useState<T>(initVal);
  const [loading, setLoading] = useState(true);  // loading state
  const [error, setError] = useState<string>('');      // optional error handling

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data);
      } catch (error_: unknown ) {
        setError((error_ as unknown as  Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  
  }, [url]);

  return { data, loading, error };
};