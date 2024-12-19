import { useState } from 'react';
import axios from 'axios';

const useCreate = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const create = async (newData: T) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, newData);
      setData(response.data);
    } catch (err) {
      setError('Error creating data');
    } finally {
      setIsLoading(false);
    }
  };

  return { create, data, isLoading, error };
};

export default useCreate;
