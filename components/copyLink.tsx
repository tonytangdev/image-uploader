import React, { useState } from 'react'
import Button from './button'

type Props = {
  link: string
}

const CopyLink = ({ link }: Props) => {
  const [buttonLabel, setButtonLabel] = useState('Copy Link')

  const onCopyToClipboard = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy)
    setButtonLabel('Copied')
  }

  return (
    <div className="w-fit bg-[#F6F8FB] rounded-xl py-[0.125rem] pr-[0.125rem] pl-2 flex flex-row border border-[#E0E0E0] items-center max-w-[338px]">
      <span className="text-ellipsis overflow-hidden inline-block whitespace-nowrap text-[0.5rem] mr-3.5">
        {link}
      </span>
      <Button label={buttonLabel} onPress={() => onCopyToClipboard(link)} />
    </div>
  )
}

export default CopyLink
