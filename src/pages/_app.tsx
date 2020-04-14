import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';
import { configureStore } from 'store';
import { Color } from 'const/Styles';
import { NavigationStyleModules } from 'components/commons/Navigation';
import { FooterStyleModules } from 'components/commons/Footer';
import 'ress/dist/ress.min.css';

const store = configureStore();

const WrapperStyle = styled('div')`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const myPageProps = { pathname, ...pageProps };

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

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

          #__next {
            height: 100%;
          }
        `}
      />
      <WrapperStyle>
        <Provider store={store}>
          <NavigationStyleModules.NavigationStyle />
          <Component {...myPageProps} />
          <FooterStyleModules.FooterStyle />
        </Provider>
      </WrapperStyle>
    </>
  );
}

export default MyApp;
