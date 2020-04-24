import React from 'react';

type Props = {
  className?: string;
};

export const MyComponent: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
