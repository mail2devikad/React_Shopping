import React, { useState } from "react";

function useFetch({ url }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  
console.log(url);

  const fetchData = async (body) => {
    try {
      const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setData(result);
    } catch (error) {
      setError(error);
    }
  };
  return {data,fetchData,error}
}

export default useFetch;
