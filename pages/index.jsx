import Head from 'next/head'
import 'font-awesome/css/font-awesome.min.css'
import {
  AboutCard,
  ImageCarousel,
  ChoiceSection,
  ProductSection,
} from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Winshow General Supplies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageCarousel />
      <AboutCard />
      <ChoiceSection />
      <ProductSection />
    </div>
  )
}
