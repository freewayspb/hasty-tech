import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer
} from 'recharts';
import { Card } from 'antd';
import NumberFormat from "react-number-format";

const Liquidity = ({ data }) => {
  const dataForRender = data && data.map(item => {
    return {
      ...item,
      x: item.quote.USD.market_cap,
      y: item.quote.USD.volume_24h,
      z: Math.abs(item.quote.USD.percent_change_24h * item.quote.USD.price/100)
    }
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <Card title={payload[0].payload.name} bordered={false}>
          <p className="tooltip-text">Rank: {payload[0].payload.cmc_rank}</p>
          <p className="desc">Volume: <NumberFormat
            decimalScale={2}
            value={payload[0].payload.quote.USD.volume_24h}
            thousandSeparator={true}
            prefix={'$'}
            displayType={'text'}
          /></p>
          <p className="desc">Price change: <NumberFormat
            decimalScale={2}
            value={payload[0].payload.quote.USD.price}
            thousandSeparator={true}
            prefix={'$'}
            displayType={'text'}
          /></p>
          <p className="desc">Price change: <NumberFormat
            decimalScale={6}
            value={payload[0].payload.quote.USD.percent_change_24h * payload[0].payload.quote.USD.price/100}
            thousandSeparator={true}
            prefix={'$'}
            displayType={'text'}
          /></p>
        </Card>
      );
    }

    return null;
  };

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
              top: 20, right: 20, bottom: 20, left: 100,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Market Capitalization" unit="$" />
            <YAxis type="number" dataKey="y" name="Volume (24h)" unit="$" />
            <ZAxis dataKey="z" range={[32, 264]} name="absolute price change (24h)" />
            <Tooltip cursor={{ strokeDasharray: '5 5' }} content={<CustomTooltip />} />
            <Scatter name="currency" data={dataForRender}>
              {
                dataForRender.map((entry, index) => <Cell
                  key={`cell-${index}`}
                  fill={'#'+Math.floor(Math.random()*16777215).toString(16)}
                />)
              }
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default Liquidity;