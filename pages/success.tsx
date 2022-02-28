import { NextPage } from 'next'
import React from 'react'

const Success: NextPage = () => {
  return (
    <div className="flex flex-col items-center font-['Poppins']">
      <span className="material-icons text-[#219653] text-[2.1875rem] mb-3">
        check_circle
      </span>
      <h1 className="text-lg font-medium text-[#4F4F4F]">
        Uploaded Successfully!
      </h1>
    </div>
  )
}

export default Success
