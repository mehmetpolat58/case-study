import React, { useContext, useEffect, useState } from 'react';
import { BasketContext } from '../store/BasketContext';

function Basket() {
  const coupon = 1;
  const { basket } = useContext(BasketContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalVal = 0;
    // eslint-disable-next-line array-callback-return
    Object.keys(basket).map((x) => {
      if (basket[x]?.content) {
        const item = basket[x].content;
        const OCG = basket[x].selectedOCG;
        const OC = basket[x].selectedOC;
        totalVal += parseFloat(item?.OCG?.[OCG]?.OC[OC].O) * coupon;
      }
    });
    setTotal(totalVal);
  }, [basket]);

  return (
    <div className="basket">
      {Object.keys(basket).map((item) => basket[item]?.content && (
        <div key={item} className="summary">
          <div>
            {basket[item].content?.OCG?.[basket[item]?.selectedOCG]?.OC[basket[item].selectedOC].MBS}
          </div>
          <div>
            Kod:
            {basket[item].content?.C}
          </div>
          <div>
            Maç:
            {basket[item].content?.N}
          </div>
          <div>
            <strong>
              Oran:
              {basket[item].content?.OCG?.[basket[item]?.selectedOCG]?.OC[basket[item].selectedOC].O}
            </strong>
          </div>
        </div>
      ))}
      <div className="total">{`Toplam Fiyat ${total?.toFixed(2)} TL`}</div>
    </div>
  );
}

export default Basket;
