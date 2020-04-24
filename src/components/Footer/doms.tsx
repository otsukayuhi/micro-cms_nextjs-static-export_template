import React from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => (
  <footer className={className}>
    <Typography variant="caption">Copyright Futae.app</Typography>
  </footer>
);
