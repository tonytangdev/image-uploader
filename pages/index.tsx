import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button'
import Footer from '../components/footer'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <div className="bg-[#FAFAFB] h-screen w-screen grid grid-rows-[1fr_auto]">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload an image and create a link" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex justify-center items-center">
        <Main>
          <Button label='Choose a file' onPress={() => console.log('click')} />
        </Main>
      </main>
      <Footer />
    </div>
  )
}

export default Home
