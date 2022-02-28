import { MouseEventHandler } from 'react'

type ButtonProps = {
  onPress: MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button = ({ onPress, label }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className="font-['Noto_Sans'] text-xs font-medium bg-[#2F80ED] text-white px-4 py-2 rounded-lg active:bg-opacity-80 inline-block whitespace-nowrap"
    >
      {label}
    </button>
  )
}

export default Button
