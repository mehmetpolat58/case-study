import React, { useContext, useEffect } from 'react';
import { BetsContext } from '../store/BetsContext';
import Table from '../components/Table';
import Basket from '../components/Basket';

function BetsPage() {
  const { getBets } = useContext(BetsContext);
  useEffect(() => {
    getBets();
  }, []);

  return (
    <div>
      <Table />
      <Basket />
    </div>
  );
}

export default BetsPage;
