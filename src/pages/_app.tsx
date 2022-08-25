import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import 'styles/globals.css'
export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            primary: ['#F8FDFE', '#B4EBF6', '#7BDBEE', '#4CCCE6', '#1DBDDE', '#169CB8', '#118198', '#0D6B7E', '#095868', '#074956']
          },
          primaryColor: 'primary',
          primaryShade: 5
        }}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
