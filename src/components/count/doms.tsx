import React from 'react';

export type ButtonProps = {
  value: string;
  onClick: () => void;
};

export type CountProps = {
  count: number;
};

export const Button: React.FC<ButtonProps> = ({ onClick, value }) => (
  <div>
    <input type="button" onClick={onClick} value={value} />
  </div>
);

export const Count: React.FC<CountProps> = ({ count }) => <p>{count}</p>;
