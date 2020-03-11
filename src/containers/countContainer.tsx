import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/count/actions';
import { Button, Count } from 'components/count/doms';

const CountContainer: React.FC = () => {
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();

  const onIncrement = useCallback(() => dispatch(increment(1)), [dispatch]);
  const onDecrement = useCallback(() => dispatch(decrement(2)), [dispatch]);

  return (
    <>
      <Count count={count} />
      <Button onClick={onIncrement} value="Increment" />
      <Button onClick={onDecrement} value="Decrement" />
    </>
  );
};

export default CountContainer;
