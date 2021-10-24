import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {

  const theme = createTheme();

  return (
    <>
    <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp
