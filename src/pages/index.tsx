import type {NextPage} from 'next'
import Head from 'next/head'

import {Home} from 'components/Home/Home'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Magnetic Carousel</title>
      <meta
        name="description"
        content="A demo of how you can create a carousel using the new utilities in Tailwind 3!"
      />
    </Head>

    <Home />
  </>
)

export default HomePage
