import React from 'react';
import StockRow from './StockRow';

const StockTable = ({ data }) => (
  <div className="row">
  <table className="table-hover">
    <thead>
      <tr>
        <th>Ticker</th>
        <th>Price</th>
        <th>Change</th>
        <th>Trend</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => {
        return (
          <StockRow key={index} data={item} />
        );
      })}
    </tbody>
  </table>
  </div>
);

export default StockTable;
