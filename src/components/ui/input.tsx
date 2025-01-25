import * as React from "react"

import { cn } from "components/lib/utils"
import { UseFormRegisterReturn } from 'react-hook-form'
import { EyeClosed, EyeIcon } from 'lucide-react'
import { Text } from './text'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean
  register?: Partial<UseFormRegisterReturn>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  loading?: boolean
  classLabel?: string
  value?: string | number
  helperText?: string
  inputId?: string
  placeholder?: string
  defaultValue?: string
  withLabel?: boolean
  label?: string
  disabled?: boolean
  error?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  isPassword?: boolean
  showPassword?: boolean
  onShowPassword?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      defaultValue,
      placeholder,
      type,
      disabled = false,
      // withLabel = false,
      classLabel,
      label,
      // inputId,
      helperText,
      // error = false,
      showPassword = false,
      onShowPassword,
      isPassword = false,
      onChange,
      value,
      startIcon,
      // ...register,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('w-full flex relative', helperText && 'mb-8')}>
        {label && (
          <Text size={'small'} className={cn('mx-2 px-2 absolute top-[-2px] transform -translate-y-1/2 bg-card', classLabel)}>
            {label}
          </Text>
        )}
        {startIcon && (
          <div className='grid place-content-center mx-2 h-6 w-6 absolute top-1/2 transform -translate-y-1/2'>
            {startIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            'w-full text-foreground flex placeholder:capitalize px-2 h-10 rounded-md border focus:border-2 border-input focus:border-input-primary bg-transparent  text-sm file:border-1 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            type === 'password' && 'pr-8',
            startIcon && 'pl-[38px]',
            type === 'password' && 'pr-[38px]',
            className
          )}
          disabled={disabled}
          ref={ref}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          {...props}
          autoComplete='off'
        />
        {isPassword ? (
          <div
            onClick={onShowPassword}
            className='grid place-content-center right-1 mx-2 h-6 w-6 absolute top-1/2 transform -translate-y-1/2'
          >
            {showPassword ? <EyeClosed /> : <EyeIcon />}
          </div>
        ) : null}
        {helperText && (
          <Text variant={'error'} size={'small'} className={cn(' mx-2 mt-1 h-auto w-6 absolute top-1/2 transform translate-y-1/2 -bottom-4', classLabel)}>
            {helperText}
          </Text>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
