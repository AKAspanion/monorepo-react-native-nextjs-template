import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import { sub } from 'utils'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  console.log('utils', sub(10, 12))
  return (
    <>
      <Head>
        <title>RN + NextJS Template</title>
        <meta name="description" content="RN + Next.js with Solito." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
