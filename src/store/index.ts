import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import count from 'store/count/reducers';
import { contactReducer } from 'store/contact/reducers';

const rootReducer = combineReducers({
  count,
  contact: contactReducer,
});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => createStore(rootReducer, bindMiddleware([thunk]));

export default initStore;
