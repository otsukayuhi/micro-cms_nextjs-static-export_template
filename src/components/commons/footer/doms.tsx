import * as React from 'react';

export type FooterProps = {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={className}>
    <small>Copyright Futae.app</small>
  </footer>
);
