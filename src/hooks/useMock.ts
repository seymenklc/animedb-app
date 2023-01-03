import { useState, useEffect } from 'react';

export const useMock = (source: any) => {
   const [cards, setCards] = useState<any[]>([]);

   useEffect(() => {
      if (source && source.data.length < 6) {
         const mocks = new Array(6 - source.data.length).fill({});

         setCards([...source.data, ...mocks]);

      } else {
         setCards(source?.data);
      }
   }, [source]);

   return { cards };
};