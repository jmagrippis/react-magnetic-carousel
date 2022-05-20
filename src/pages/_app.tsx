import 'styles/globals.css'
import type {AppProps} from 'next/app'

import {Header} from 'components/Header'
import {Footer} from 'components/Footer'

const MyApp = ({Component, pageProps}: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default MyApp
