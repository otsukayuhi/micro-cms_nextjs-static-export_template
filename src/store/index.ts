import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from 'store/count/reducers';
import { contactReducer } from 'store/contact/reducers';

const rootReducer = combineReducers({
  count: countReducer,
  contact: contactReducer,
});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const configureStore = () =>
  createStore(rootReducer, bindMiddleware([thunk]));
