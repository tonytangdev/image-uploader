import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Main from '../components/main'
import Uploader from '../components/uploader'
import Uploading from '../components/uploading'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload an image and create a link" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Uploader />
    </>
  )
}

export default Home
