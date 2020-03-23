import React from 'react';
import { Typography } from '@material-ui/core';

export type SectionLayoutProps = {
  className?: string;
  title: string;
  text?: string;
};

export const SectionLayout: React.FC<SectionLayoutProps> = ({
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
