import { useState } from "react";
import axios from "axios";

const useDelete = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteItem = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      setError("Error deleting data");
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteItem, isLoading, error };
};

export default useDelete;
