import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './App';

import createStore from './store';

import './index.css';

const store = createStore()

// setTimeout(function() {
//   store.dispatch({
//     type: 'SET_NOTES',
//     payload: {
//       id: 0,
//       text: 'Good afternoon'
//     }
//   })
// }, 1000)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
