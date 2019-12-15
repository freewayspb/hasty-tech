import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {Route, Switch} from "react-router-dom";
import { Select } from "antd";
import currencyActions from "../../redux/cryptocurrency/actions";
import MarketTable from "../MarketTable";
import Liquidity from "../Liquidity";
import './style.css';

const Content = ({ currencyList, currencyLoading, getCurrency }) => {
  const [limit, setLimit] = useState('100');

  useEffect(() => {
    getCurrency({limit, sort: 'market_cap'})
  }, [limit, getCurrency]);

  return (
    <>
      <Select
        className="limit-select"
        defaultValue="100"
        placeholder="Set limit"
        onChange={value => setLimit(value)}
      >
        <Select.Option value="10">10</Select.Option>
        <Select.Option value="50">50</Select.Option>
        <Select.Option value="100">100</Select.Option>
        <Select.Option value="5000">All</Select.Option>
      </Select>
      <Switch>
        <Route path="/liquidity" render={() => <Liquidity data={currencyList} />} />
        <Route path="/" render={() => <MarketTable
          bordered
          data={currencyList}
          loading={currencyLoading}
        />} />
      </Switch>
    </>
  )
};

const { getCurrency } = currencyActions;

const mapStateToProps = state => ({
  currencyList: state.cryptoCurrency.get('currencyList'),
  currencyLoading: state.cryptoCurrency.get('currencyLoading'),
  currencyError: state.cryptoCurrency.get('currencyError')
});

export default connect(mapStateToProps, { getCurrency })(Content);
