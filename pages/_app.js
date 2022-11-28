import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { Layout } from '../components';
import nProgress from 'nprogress';
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
import { theme } from '../styles/theme';

import "@fontsource/raleway";
import "@fontsource/inter"


function MyApp({ Component, pageProps }) {
    const router = useRouter();
    nProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => {
        nProgress.start();
    };

    const handleRouteChangeComplete = () => {
        nProgress.done();
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);


    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <DefaultSeo
          title="Batuhan Falk"
          description=""
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "",
            site_name: "Batuhan Falk",
            images: [
              {
                url: "",
                width: 1200,
                height: 630,
                alt: "Batuhan Falk",
              },
            ],
          }}
        />
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </ChakraProvider>
      </>
    );
}

export default MyApp;
