import React from 'react'

type Props = {}

const Uploading = (props: Props) => {
  return (
    <div>
      <h1 className='font-["Poppins"] text-[#4F4F4F] mb-8'>Uploading...</h1>
      <div className="bg-[#F2F2F2] w-[21rem] h-1.5 rounded-xl mb-2 overflow-hidden">
        <div className="bg-[#2F80ED] w-[6.25rem] h-1.5 rounded-xl animate-bounce animate-infinite-horizontal-translate"></div>
      </div>
    </div>
  )
}

export default Uploading
