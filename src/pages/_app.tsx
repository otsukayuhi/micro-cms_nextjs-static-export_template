import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';
import { configureStore } from 'store';
import { Color } from 'const/Styles';
import 'ress/dist/ress.min.css';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const myPageProps = { pathname, ...pageProps };

  return (
    <>
      <Global
        styles={css`
          body {
            font-family: Roboto, 'Helvetica Neue', Arial,
              'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
            color: ${Color.black};
          }

          ul[class],
          li[class] {
            padding: 0;
            list-style: none;
          }

          img {
            display: block;
            max-width: 100%;
          }
        `}
      />
      <Provider store={store}>
        <Component {...myPageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
