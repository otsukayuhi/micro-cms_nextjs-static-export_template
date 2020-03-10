import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

export const Count: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <>
      <p>{count}</p>
      <div>
        <input
          type="button"
          onClick={() => dispatch(increment(2))}
          value="INCREMENT"
        />
      </div>
      <div>
        <input
          type="button"
          onClick={() => dispatch(decrement(1))}
          value="DECREMENT"
        />
      </div>
    </>
  );
};
