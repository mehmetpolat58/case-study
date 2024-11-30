import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import axios from 'axios';

const BetsContext = createContext();

function BetsProvider({ children }) {
  const [bets, setBets] = useState([]);

  const getBets = useCallback(() => {
    const fetch = axios.get('https://nesine-case-study.onrender.com/bets');
    fetch.then((res) => {
      setBets(res?.data);
    });
  }, []);

  const value = useMemo(
    () => ({ getBets, bets }),
    [getBets, bets],
  );

  return <BetsContext.Provider value={value}>{children}</BetsContext.Provider>;
}

export { BetsContext, BetsProvider };
