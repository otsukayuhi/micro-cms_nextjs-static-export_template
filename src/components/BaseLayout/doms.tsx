import React from 'react';

type Props = {
  className?: string;
};

export const BaseLayout: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
