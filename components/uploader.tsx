import React from 'react'
import Button from './button'
import DragAndDrop from './dragAndDrop'

type Props = {
  onHandleImageDrop: (file: File) => void
}

const Uploader = ({ onHandleImageDrop }: Props) => {
  return (
    <div className='font-["Poppins"] flex flex-col items-center'>
      <h1 className="text-lg font-medium text-[#4F4F4F] mb-4">
        Upload your image
      </h1>
      <p className="font-medium text-[0.625rem] text-[#828282] mb-8">
        File should be Jpeg, Png...
      </p>
      <div className="mb-6">
        <DragAndDrop onHandleImageDrop={onHandleImageDrop} />
      </div>
      <div className="mb-6">
        <p className="text-[#BDBDBD] text-xs">Or</p>
      </div>
      <Button label="Choose a file" onPress={() => console.log('click')} />
    </div>
  )
}

export default Uploader
