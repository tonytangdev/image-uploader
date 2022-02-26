import { MouseEventHandler } from 'react'

export interface ButtonProps {
  onPress: MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onPress}
      className="font-['Noto_Sans'] text-xs font-medium bg-[#2F80ED] text-white px-4 py-2 rounded-lg active:bg-opacity-80"
    >
      {props.label}
    </button>
  )
}

export default Button
