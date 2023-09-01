import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>MechanicCoder</title>
        <meta name='viewport'  content='width=device-width, initial-scale=1' />
        <meta name='description' content='Coding Platform for kids' />
      </Head>
        <Component {...pageProps} />
    </RecoilRoot>
  )}
