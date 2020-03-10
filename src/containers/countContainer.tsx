import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'ducks/count/actions';
import { Button, Count } from 'components/count/doms';

const CountContainer: React.FC = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment(1));
  const onDecrement = () => dispatch(decrement(2));

  return (
    <>
      <Count count={count} />
      <Button onClick={onIncrement} value="Increment" />
      <Button onClick={onDecrement} value="Decrement" />
    </>
  );
};

export default CountContainer;
