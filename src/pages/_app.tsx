import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import { NavigationStyle } from 'components/commons/navigation/styles';

import 'ress/dist/ress.min.css';
import 'style/override.css';
import { FooterStyle } from 'components/commons/footer/styles';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationStyle />
      <Component {...pageProps} />
      <FooterStyle />
    </Provider>
  );
}

export default MyApp;
