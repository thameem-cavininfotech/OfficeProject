import { useState } from 'react';
import axios from 'axios';

const useUpdate = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const update = async (id: string, updatedData: T) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${url}/${id}`, updatedData);
      setData(response.data);
    } catch (err) {
      setError('Error updating data');
    } finally {
      setIsLoading(false);
    }
  };

  return { update, data, isLoading, error };
};

export default useUpdate;
