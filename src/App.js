import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Layout } from 'antd';
import TopMenuBar from './components/Menu';
import 'antd/dist/antd.css';
import './App.css';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './redux';
import rootSaga from './redux/sagas';

/* pages */
import Main from './pages/Main';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout className="App">
          <Layout.Header className="App-header">
            <TopMenuBar />
          </Layout.Header>
          <Layout.Content>
            <Switch>
              <Route path="/liquidity">
                <div>liquidity</div>
              </Route>
              <Route path="/" component={Main} />
            </Switch>
          </Layout.Content>
          <Layout.Footer>
            React test task for Hasty 12.2019
          </Layout.Footer>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
