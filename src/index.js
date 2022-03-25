import React from 'react';
import ReactDOM from 'react-dom';
import { NinjaOneClientApp } from './NinjaOneClientApp';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render((
  <Provider store={store}>
    <NinjaOneClientApp />
  </Provider>
),
  document.getElementById('root')
);