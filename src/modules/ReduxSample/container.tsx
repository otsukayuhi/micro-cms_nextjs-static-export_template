import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { myReducer } from './reducers';
import { Count } from './doms';

/**
 * 第2引数で initialState を上書きできる
 * -> initialState は Reducer にある
 *
 * const store = createStore(myReducer, {count: 1});
 */
const store = createStore(myReducer);

const CountContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
};

export default CountContainer;
