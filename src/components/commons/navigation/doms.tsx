import * as React from 'react';
import Link from 'next/link';

export type NavigationProps = {
  className?: string;
};

export const Navigation: React.FC<NavigationProps> = ({ className }) => (
  <nav className={className}>
    <Link href="/">
      <a className="_logo">
        <img src="images/logo.svg" alt="フタエドットアップ" />
      </a>
    </Link>
    <ul className="_list">
      <li className="_item">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);
