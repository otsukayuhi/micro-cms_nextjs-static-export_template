import React from 'react';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

const Page = () => {
  return (
    <>
      <div>
        <input
          type="button"
          onClick={() => {
            store.dispatch({ type: 'INCREMENT' });
          }}
          value="INCREMENT"
        />
      </div>
      <div>
        <input
          type="button"
          onClick={() => {
            store.dispatch({ type: 'DECREMENT' });
          }}
          value="DECREMENT"
        />
      </div>
    </>
  );
};

export default Page;
