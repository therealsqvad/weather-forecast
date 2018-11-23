import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSagas from '../sagas/index';
// import { getLoc } from '../sagas/weather';

const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

export const configureStore = initialState => {
  const store = finalCreateStore(rootReducer, initialState);

  sagaMiddleware.run(rootSagas);
  return store;
};

// export default configureStore;
