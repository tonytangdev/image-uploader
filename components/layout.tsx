import React, { ReactNode } from 'react'
import Footer from './footer'
import Main from './main'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#FAFAFB] h-screen w-screen grid grid-rows-[1fr_auto]">
      <main className="flex justify-center items-center">
        <Main>{children}</Main>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
