import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import { GlobalStyle } from 'components/GlobalStyle';
import { WrapperStyle } from 'components/Wrapper';
import { NavigationStyle } from 'components/Navigation';
import { FooterStyle } from 'components/Footer';
import 'ress/dist/ress.min.css';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const myPageProps = { pathname, ...pageProps };

  return (
    <>
      <GlobalStyle />
      <WrapperStyle>
        <Provider store={store}>
          <NavigationStyle />
          <Component {...myPageProps} />
          <FooterStyle />
        </Provider>
      </WrapperStyle>
    </>
  );
}

export default MyApp;
