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
    body: 'w-full h-screen flex flex-col items-center justify-center overflow-x-hidden',
    container: 'max-w-1500 mx-auto p-4 p-8 flex flex-col items-center justify-center',
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