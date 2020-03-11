import { createStore, combineReducers, applyMiddleware } from 'redux';
import count from 'store/count/reducers';

const rootReducer = combineReducers({ count });

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => createStore(rootReducer, bindMiddleware([]));

export default initStore;
