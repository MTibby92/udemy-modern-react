import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const API_KEY = 'AIzaSyARiUZmwrx78snfQZMZGzlE4yup57Nufwg';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
  return <div>React simple starter</div>;
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
