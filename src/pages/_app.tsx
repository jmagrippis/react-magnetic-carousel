import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {Footer} from 'components/Footer'
import {Header} from 'components/Header/Header'

const MyApp = ({Component, pageProps}: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default MyApp
