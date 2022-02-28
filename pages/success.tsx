import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="description" content="Uploaded Successfully!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center font-['Poppins']">
        <span className="material-icons text-[#219653] text-[2.1875rem] mb-3">
          check_circle
        </span>
        <h1 className="text-lg font-medium text-[#4F4F4F] mb-6">
          Uploaded Successfully!
        </h1>
        <Image
          className="rounded-xl mb-6"
          src="https://images.unsplash.com/photo-1645921470710-d3c765e04c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          width={338}
          height={224.4}
        />
      </div>
    </>
  )
}

export default Success
