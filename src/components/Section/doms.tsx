import React from 'react';
import { Typography } from '@material-ui/core';
import { SectionProps } from './types';

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  title,
  text,
}) => (
  <section className={className}>
    <Typography variant="h2" gutterBottom>
      {title}
    </Typography>
    {text && (
      <Typography className="_text" variant="body1">
        {text}
      </Typography>
    )}
    {children}
  </section>
);
