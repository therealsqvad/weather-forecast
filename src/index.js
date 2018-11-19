import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configurestore';
import './index.css';
// import App from './components/App/App';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers';
// import rootSagas from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

// const finalCreateStore = compose(
//   applyMiddleware(sagaMiddleware)
// )(createStore);

// const configureStore = initialState => {
//   const store = finalCreateStore(rootReducer, initialState);

//   sagaMiddleware.run(rootSagas);
//   return store;
// };

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
