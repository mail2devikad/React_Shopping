import React, { useState } from "react";

function useFetch({ url }) {
  const [error, setError] = useState();
  

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
      
      const newresult=await result.json();
  
      return newresult;

    } catch (error) {
      setError(error);
    }
  };
  return {fetchData,error}
}

export default useFetch;
