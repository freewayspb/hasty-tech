import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer
} from 'recharts';

const Liquidity = ({ data }) => {
  const dataForRender = data && data.map(item => {
    return {
      ...item,
      x: item.quote.USD.market_cap,
      y: item.quote.USD.volume_24h,
      z: Math.abs(item.quote.USD.percent_change_24h * item.price)
    }
  });
  return (
    <>
      {data && (
        <ResponsiveContainer
          aspect={2}
          minWidth={460}
          minHeight={460}
        >
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Market Capitalization" unit="$" />
            <YAxis type="number" dataKey="y" name="Volume (24h)" unit="$" />
            <ZAxis dataKey="z" range={[64, 144]} name="absolute price change (24h)" />
            <Tooltip cursor={{ strokeDasharray: '5 5' }} />
            <Scatter name="currency" data={dataForRender}>
              {
                dataForRender.map((entry, index) => <Cell key={`cell-${index}`} fill="#000" />)
              }
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default Liquidity;