import React from 'react';
import { NextPage } from 'next';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { myReducer } from 'ducks/count/reducers';
import ReduxSampleContainer from 'containers/countContainer';

/**
 * 第2引数で initialState を上書きできる
 * -> initialState は Reducer にある
 *
 * const store = createStore(myReducer, {count: 1});
 */
const store = createStore(myReducer);

const Page: NextPage = () => {
  return (
    <Provider store={store}>
      <ReduxSampleContainer />
    </Provider>
  );
};

export default Page;
