import React from 'react';

type Props = {
  className?: string;
};

export const Loading: React.FC<Props> = ({ className }) => (
  <div className={className}>Sending...</div>
);
