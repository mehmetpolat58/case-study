import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState({});

  const setBasketData = useCallback((key, data) => {
    setBasket((prev) => ({ ...prev, [key]: basket[key] && basket[key].selectedOCG === data.selectedOCG && basket[key].selectedOC === data.selectedOC ? null : data }));
  }, [basket]);

  const value = useMemo(() => ({ basket, setBasketData, setBasket }), [basket, setBasketData, setBasket]);

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}

export { BasketContext, BasketProvider };
