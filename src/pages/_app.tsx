import React from 'react';
import 'ress/dist/ress.min.css';
import 'style/override.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
