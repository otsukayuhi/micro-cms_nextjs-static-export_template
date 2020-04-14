import React from 'react';

export type BaseProps = {
  className?: string;
};

export const Base: React.FC<BaseProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
