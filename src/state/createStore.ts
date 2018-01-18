import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers';

export function create() {
  const middleware = [ thunk ];

  const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const s = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return s;

}

export const store = create();