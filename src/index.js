import React from 'react';
import { render } from 'react-dom'
import SearchWrapper from './app/Search.js';
import Results from './app/Results.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applicationApp } from './app/Store.js';

let store = createStore(applicationApp);

const App = () => (
  <div>
    <SearchWrapper />
    <Results />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
