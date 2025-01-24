import type React from 'react'

interface TextProp {
  className?: string
  variant?:
    | 'primaryLight'
    | 'primary'
    | 'primaryDark'
    | 'secondary'
    | 'bodyText'
    | 'bodyTextLight'
    | 'secondaryLight'
    | 'bodyTextLightTwo'
    | 'bodyTextLightThree'
    | 'bodyTextLighFour'
    | 'muted'
    | 'error'
    | 'success'
    | 'warning'
    | 'colorText'
  children?: React.ReactNode
  onClick?: () => void
  size?: 'large' | 'small' | 'body' | 'bodyBold' | 'medium' | 'xLarge' | 'xxLarge' | 'mediumRegular' | 'mediumLight'
}

export const Text: React.FC<TextProp> = ({
                                           children,
                                           size = 'body',
                                           className,
                                           onClick,
                                           variant = 'bodyText'
                                         }) => {
  const classMappings = {
    small: 'font-raleway text-[0.7rem] sm:text-[0.8rem] font-normal',
    body: 'font-raleway  text-[0.875rem] sm:text-[0.9rem] font-normal',
    bodyBold: 'font-raleway  text-[1.0rem] sm:text-[0.9rem] font-bold',
    mediumLight: 'font-raleway text-[1.1rem] sm:text-[1.2rem]  font-light',
    medium: 'font-raleway text-[1.1rem] sm:text-[1.2rem]  font-medium',
    mediumRegular: 'font-raleway text-[1.1rem] sm:text-[1.2rem]  font-normal',
    large:
      'font-raleway text-[clamp(1.3rem,5vw,1.3rem)]  md:text-[clamp(1.3rem,5vw,1.5rem)] leading-[120%] font-semibold capitalize',
    xLarge: 'font-raleway  text-[clamp(1.7rem,5vw,2.8rem)] leading-[120%] font-semibold capitalize',
    xxLarge: 'font-raleway  text-[clamp(2rem,10vw,4rem)] leading-[120%] font-bold capitalize'
  }
  const colorClass = {
    primaryLight: 'text-primary-active',
    primary: 'text-primary',
    primaryDark: 'text-primary-dark',
    secondary: 'text-foreground-secondary',
    secondaryLight: 'text-secondary-light',
    muted: 'text-foreground-secondary',
    bodyText: 'text-foreground',
    bodyTextLight: 'text-foreground-secondary',
    error: 'text-destructive',
    success: 'text-success',
    warning: 'text-warning',
    colorText: 'text-color-text',
    bodyTextLightTwo: 'text-foreground-secondary',
    bodyTextLightThree: 'text-foreground-tertiary',
    bodyTextLighFour: 'text-foreground-tertiary',
    '': ''
  }
  // Create an array of class names based on the selected variant and size
  const classNames = [
    classMappings[size],
    colorClass[variant],
    className ?? '' // Include any custom className if provided
  ].join(' ')

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  )
}