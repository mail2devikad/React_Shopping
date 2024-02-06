import axios from "axios";
import { useState, useEffect } from "react";

// handling GET requests
export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

// handling POST requests
export const usePostData = (url, body) => {
  try {
    const data = axios.post(url, body);
    return data;
  } catch (error) {
    setError(error);
  } finally {
    return {
      data,
      error,
    };
  }
};
