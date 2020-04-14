import React from 'react';
import { Typography } from '@material-ui/core';

export type SectionProps = {
  className?: string;
  title: string;
  text?: string;
};

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
