import React from 'react';
import { Typography } from '@material-ui/core';
import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={className}>
    <Typography variant="caption">Copyright Futae.app</Typography>
  </footer>
);
