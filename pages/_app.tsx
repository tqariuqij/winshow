import '../styles/globals.css'
import '../styles/imageCarouselStyles.css'
import '../styles/slider-animations.css'
import { Layout } from '../components'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
