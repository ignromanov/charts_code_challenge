import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import saga from '../sagas';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware<typeof saga>();
  const composeEnhancers = composeWithDevTools({ trace: true });
  
  const storeCreator = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  
  sagaMiddleware.run(saga);
  
  return storeCreator;
}

export const store = configureStore();
