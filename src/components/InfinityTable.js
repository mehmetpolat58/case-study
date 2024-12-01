/* eslint-disable no-undef */
import React, {
  Fragment, useEffect, useState, useCallback,
} from 'react';
import TD from './TD';
import { hedaerColumns } from '../constants/constants';

function InfinityTable({ bets }) {
  const pageRate = 50;
  const [page, setPage] = useState(1);
  const [data, setData] = useState(...[bets?.slice(0, pageRate)]);

  useEffect(() => {
    if (bets?.length) setData(...[bets?.slice(0, pageRate)]);
  }, [bets]);

  const load = useCallback(
    () => {
      if (data?.length >= bets?.length) return;
      setPage(page + 1);
      setData([...data, ...bets.slice(page * pageRate, page * pageRate + pageRate)]);
    },
    [bets, data],
  );

  useEffect(() => {
    const handleScroll = async () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        load();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, bets]);

  return (
    <table>
      <thead>
        <tr>
          <th>{`Event Count ${data?.length}`}</th>
          {hedaerColumns.map((x) => (
            <th key={`${x}-th-tr`}>{x}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((x) => (
          <Fragment key={x.C}>
            <tr>
              <td>{`${x.D} ${x.DAY} ${x.LN}`}</td>
              {hedaerColumns.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              <td>{`${x.C} ${x.T} ${x.N}`}</td>
              <td>Yorumlar</td>
              <td>{x?.OCG?.[1]?.MBS}</td>
              <TD
                value={x?.OCG?.[1]?.OC?.[0]?.O}
                data={[x, 1, 0]}
              />
              <TD
                value={x?.OCG?.[1]?.OC?.[1]?.O}
                data={[x, 1, 1]}
              />
              <td />
              <TD
                value={x?.OCG?.[5]?.OC?.[25]?.O}
                data={[x, 5, 25]}
              />
              <TD
                value={x?.OCG?.[5]?.OC?.[26]?.O}
                data={[x, 5, 26]}
              />
              <td />
              <td />
              <td />
              <td />
              <td />
              <TD
                value={x?.OCG?.[2]?.OC?.[3]?.O}
                data={[x, 2, 3]}
              />
              <TD
                value={x?.OCG?.[2]?.OC?.[4]?.O}
                data={[x, 2, 4]}
              />
              <TD
                value={x.OCG?.[2]?.OC?.[5]?.O}
                data={[x, 2, 5]}
              />
              <td />
              <td />
              <td />
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default InfinityTable;
