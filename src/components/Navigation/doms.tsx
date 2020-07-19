import React from 'react';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';

type Props = {
  className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => (
  <nav className={className}>
    <Link href="/">
      <a className="_logo">
        <img src="/images/logo.svg" alt="フタエドットアップ" />
      </a>
    </Link>
    <ul className="_list">
      <li className="_item">
        <Link href="/contact">
          <a>
            <Button startIcon={<NavigateNextIcon />} component={'span'}>
              contact
            </Button>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);
