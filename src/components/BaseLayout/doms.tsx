import React from 'react';
import { BaseLayoutProps } from './types';

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;
