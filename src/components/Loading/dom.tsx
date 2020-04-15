import React from 'react';
import { LoadingProps } from './types';

export const Loading: React.FC<LoadingProps> = ({ className }) => (
  <div className={className}>Sending...</div>
);
