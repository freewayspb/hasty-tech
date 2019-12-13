import React from 'react';
import NumberFormat from 'react-number-format';
import { Table } from 'antd';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'cmc_rank',
    sorter: (a, b) => a.cmc_rank - b.cmc_rank,
    width: '10%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '20%',
  },
  {
    title: 'Price',
    dataIndex: 'quote.USD.price',
    render: (price) => (
      <NumberFormat
        decimalScale={2}
        value={price}
        thousandSeparator={true}
        prefix={'$'}
        displayType={'text'}
      />
      ),
    sorter: (a, b) => a.quote.USD.price - b.quote.USD.price,
    width: '20%',
  },
  {
    title: 'Price Change (24h)',
    dataIndex: 'quote.USD.percent_change_24h',
    sorter: (a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h,
    render: (percent) => (
      <NumberFormat
        decimalScale={2}
        value={percent}
        thousandSeparator={true}
        suffix={'%'}
        displayType={'text'}
      />
    ),
    width: '10%',
  },

  {
    title: 'Market Cap',
    dataIndex: 'quote.USD.market_cap',
    render: (cap) => (
      <NumberFormat
        decimalScale={0}
        value={cap}
        thousandSeparator={true}
        prefix={'$'}
        displayType={'text'}
      />
    ),
    sorter: (a, b) => a.quote.USD.market_cap - b.quote.USD.market_cap,
    width: '20%',
  },

  {
    title: 'Volume (24h)',
    dataIndex: 'quote.USD.volume_24h',
    render: (volume) => (
      <NumberFormat
        decimalScale={0}
        value={volume}
        thousandSeparator={true}
        prefix={'$'}
        displayType={'text'}
      />
    ),
    sorter: (a, b) => a.quote.USD.volume_24h - b.quote.USD.volume_24h,
    width: '20%',
  },
];

const MarketTable = ({ loading, data }) => {
  return (
      <Table
        columns={columns}
        loading={loading}
        dataSource={data}
        rowKey={row => row.id}
      />
  )
};

export default MarketTable;