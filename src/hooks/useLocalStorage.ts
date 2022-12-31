import { useEffect, useState } from 'react';

const fetchPrevData = (key: string, initState: Object) => {
   const prevData = localStorage.getItem(key);
   const parsedData = prevData && JSON.parse(prevData);

   if (parsedData) return parsedData;

   return initState;
};

export const useLocalStorage = (key: string, initState: Object) => {
   const [data, setData] = useState(() => {
      return fetchPrevData(key, initState);
   });

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(data));
   }, [data]);

   return [data, setData];
};