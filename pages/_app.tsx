import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { LinkProvider } from '@mcansh/custom-next-link';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

import { GlobalStyle } from '~/components/style/global-style';
import { version, repository, description } from '~/package.json';
import { theme } from '~/config';

const iconSizes = [32, 57, 72, 96, 120, 128, 144, 152, 195, 228];

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('EPVCGNZL');
      Fathom.trackPageview();
    }
  }, []);

  React.useEffect(() => {
    const info = [
      `Version: ${version}`,
      `Next.js Build: ${process.env.BUILD_ID}`,
      `You can find the code here: https://github.com/${repository}`,
    ];
    // eslint-disable-next-line no-console
    info.forEach(message => console.log(message));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LinkProvider value="https://mcan.sh">
        <Head>
          <title>Logan McAnsh</title>
          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/logo.svg" color="#ea567c" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#1d2330" />
          {iconSizes.map(icon => {
            const size = `${icon}x${icon}`;
            return (
              <link
                key={size}
                rel="apple-touch-icon"
                sizes={size}
                href={`/static/images/logo/logo-${icon}.png`}
              />
            );
          })}
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </LinkProvider>
    </ThemeProvider>
  );
};

export default App;
