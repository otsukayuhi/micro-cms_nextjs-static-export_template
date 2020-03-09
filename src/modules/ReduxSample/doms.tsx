import React from 'react';

export type CountProps = {
  count: number;
  increment: (number) => void;
  decrement: (number) => void;
};

export const Count: React.FC<CountProps> = ({
  count,
  increment,
  decrement,
}) => (
  <>
    <p>{count}</p>
    <div>
      <input type="button" onClick={() => increment(2)} value="INCREMENT" />
    </div>
    <div>
      <input type="button" onClick={() => decrement(1)} value="DECREMENT" />
    </div>
  </>
);
