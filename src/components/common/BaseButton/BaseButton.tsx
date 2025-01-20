import classNames from "classnames"

interface BaseButtonProps {
  size?: 'sm' | 'md' | 'lg',
  isBg?: boolean,
  isOutline?: boolean,
  bgColor?: string,
  children: React.ReactNode,
  style?: string,
  onClick?: () => void

}
const BaseButton = ({children, size = 'md', isBg = false, isOutline = false, bgColor, style, onClick}: BaseButtonProps) => {
  return (
    <button onClick={onClick} className={classNames(`rounded-md bg-${bgColor} text-white ${style}`, {
      'bg-blue-500 text-white': isBg,
      'border-2': isOutline,
      'px-2 h-[25px]': size === 'sm',
      'px-4 h-[40px]': size === 'md',
      'px-6 h-[50px]': size === 'lg',
    })}>{children}</button>
  )
}

export default BaseButton