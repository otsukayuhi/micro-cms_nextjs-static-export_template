import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { increment, decrement } from './actions';
import { myReducer, InitialStateTypes } from './reducers';
import { Count } from './doms';

/**
 * 第2引数で initialState を上書きできる
 * -> initialState は Reducer にある
 *
 * const store = createStore(myReducer, {count: 1});
 */
const store = createStore(myReducer);

// コンポーネントにPropsとして渡すStore
const mapStateToProps = (state: InitialStateTypes) => ({
  count: state.count,
});

// コンポーネントにPropsとして渡すdispatch(actions())
const mapDispatchToProps = dispatch => ({
  increment: payload => {
    dispatch(increment(payload));
  },
  decrement: payload => {
    dispatch(decrement(payload));
  },
});

const ConnectCount = connect(mapStateToProps, mapDispatchToProps)(Count);

const CountContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectCount />
    </Provider>
  );
};

export default CountContainer;
