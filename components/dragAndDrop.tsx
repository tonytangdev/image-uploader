import Image from 'next/image'
import React, { DragEvent, useState } from 'react'

type Props = {
  onHandleImageDrop: (file: File) => void
}

const DragAndDrop = ({ onHandleImageDrop }: Props) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsBeingHovered(false)

    const file = e.dataTransfer.files[0]
    const { type } = file

    if (!type.startsWith('image')) {
      alert('Please provide a valid image.')
    }

    onHandleImageDrop(file)
  }

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsBeingHovered(false)
  }

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsBeingHovered(true)
  }

  return (
    <div
      className={`flex flex-col bg-[#F6F8FB] py-9 px-20 items-center rounded-xl border-dashed border-2 border-[#97BEF4] ${
        isBeingHovered && 'opacity-50'
      }`}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
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
