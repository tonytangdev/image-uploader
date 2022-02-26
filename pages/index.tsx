import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <div className='bg-[#FAFAFB] h-screen w-screen grid grid-rows-[1fr_auto]'>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload an image and create a link" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center'>
        <Main>
          TEST
        </Main>
      </main>
      <footer>
        <span className='flex justify-center text-[#A9A9A9] font-medium'>
          created by&nbsp;<b className='font-bold underline'>tonytangdev</b>&nbsp;- devChallenges.io
        </span>
      </footer>
    </div>
  )
}

export default Home
