// import axios from "axios";
// import { useState, useEffect } from "react";

// // handling GET requests
//  const useGetData = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(url);
//         setData(result);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error };
// };

// // handling POST requests
//  const usePostData = async (url, body) => {
//   console.log(url,body);
//   const [newdata,setNewdata]=useState();
//   try {
//     const data =await axios.post(url, body);
//     return data;
//     setNewdata(data)
//   } catch (error) {

//   }
//   return newdata
// };

// const useFetch={usePostData}
// export default useFetch;

import React, { useState } from "react";

function useFetch({ url }) {
  const [data, setData] = useState();
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
      setData(result);
    } catch (error) {
      setError(error);
    }
  };
  return {data,fetchData,error}
}

export default useFetch;
