import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from 'store';

import 'ress/dist/ress.min.css';
import 'style/override.css';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
