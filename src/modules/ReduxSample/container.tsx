import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { increment, decrement } from './actions';
import { myReducer } from './reducers';
import { Count } from './doms';

const store = createStore(myReducer);

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: num => {
    dispatch(increment(num));
  },
  decrement: num => {
    dispatch(decrement(num));
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
