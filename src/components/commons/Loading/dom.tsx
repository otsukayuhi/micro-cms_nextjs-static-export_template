import React from 'react';

export type LoadingProps = {
  className?: string;
};

export const Loading: React.FC<LoadingProps> = ({ className }) => (
  <div className={className}>Sending...</div>
);
