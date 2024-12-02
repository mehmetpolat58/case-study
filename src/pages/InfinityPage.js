import React, { useContext, useEffect } from 'react';
import { BetsContext } from '../store/BetsContext';
import Basket from '../components/Basket';
import InfinityTable from '../components/InfinityTable';

function InfinityPage() {
  const { getBets, bets } = useContext(BetsContext);

  useEffect(() => {
    getBets();
  }, []);

  return (
    <div>
      <InfinityTable bets={bets} />
      <Basket />
    </div>
  );
}

export default InfinityPage;
