import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
