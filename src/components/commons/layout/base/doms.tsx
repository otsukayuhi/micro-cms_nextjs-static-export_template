import React from 'react';

export type BaseLayoutProps = {
  className?: string;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;
