import * as React from 'react';

export type LayoutProps = {
  title: string;
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  className,
  children,
  title,
}) => (
  <section className={className}>
    <h2 className="_title">{title}</h2>
    {children}
  </section>
);
