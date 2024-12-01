import React, { useContext, useEffect } from 'react';
import { BetsContext } from '../store/BetsContext';
import Basket from '../components/Basket';
import { BasketContext } from '../store/BasketContext';
import InfinityTable from '../components/InfinityTable';

function InfinityPage() {
  const { getBets, bets } = useContext(BetsContext);
  const { setBasket } = useContext(BasketContext);

  useEffect(() => {
    getBets();
    return () => setBasket({});
  }, []);

  return (
    <div>
      <InfinityTable bets={bets} />
      <Basket />
    </div>
  );
}

export default InfinityPage;
