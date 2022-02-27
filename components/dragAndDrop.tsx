import Image from 'next/image'
import React from 'react'

type Props = {}

const DragAndDrop = ({}: Props) => {
  return (
    <div className="flex flex-col bg-[#F6F8FB] py-9 px-20 items-center rounded-xl border-dashed border-2 border-[#97BEF4]">
      <div className="mb-9">
        <Image src="/image.svg" width="114.13" height="88.24" />
      </div>
      <span className="font-['Poppins'] font-medium text-[#BDBDBD] text-xs">
        Drag & Drop your image here
      </span>
    </div>
  )
}

export default DragAndDrop
