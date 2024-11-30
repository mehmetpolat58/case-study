import React, { useContext, useMemo } from 'react';
import { BasketContext } from '../store/BasketContext';

function TdComponent({
  selectableClass, value, selectFunc, selected,
}) {
  // console.log('td render');
  return (
    <td className={`${selected} ${selectableClass}`} onClick={() => selectFunc()}>
      {value || '-'}
    </td>
  );
}

function TD({
  value = null,
  data,
}) {
  const { basket, setBasketData } = useContext(BasketContext);
  const isSelected = basket[data[0].C] && basket[data[0].C].selectedOCG === data[1] && basket[data[0].C].selectedOC === data[2];

  function selectBet(item, OCG, OC) {
    const datas = {
      content: item,
      selectedOCG: OCG,
      selectedOC: OC,
    };
    setBasketData(item.C, datas);
  }

  const memorizedTD = useMemo(() => TdComponent({
    value,
    selectableClass: value ? 'selectable' : '',
    selectFunc: () => selectBet(data[0], data[1], data[2]),
    selected: isSelected ? 'selected' : '',
  }), [data, value, isSelected]);

  return memorizedTD;
}

export default TD;
