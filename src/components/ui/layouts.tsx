import type React from 'react'

interface TextProp {
  className?: string
  size?:
    | 'box'
    | 'container'
    | 'body'

  children?: React.ReactNode
  onClick?: () => void
}

export const Layouts: React.FC<TextProp> = ({
                                           children,
                                           size = 'body',
                                           className,
                                           onClick,
                                         }) => {
  const classMappings = {
    container: 'w-full h-screen flex flex-col items-center px-4 overflow-x-hidden',
    body: 'max-w-[1500px] w-full mx-auto px-4',
    box: 'p-4',
  }

  // Create an array of class names based on the selected variant and size
  const classNames = [
    classMappings[size],
    className ?? '' // Include any custom className if provided
  ].join(' ')

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  )
}