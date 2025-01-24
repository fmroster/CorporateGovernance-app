import { cn } from 'components/lib/utils'
import * as React from 'react'
import { Text } from './text'
import { Label } from '@radix-ui/react-label'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Eye, EyeClosed } from 'lucide-react'

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
      register,
      onChange,
      onKeyUp,
      value,
      onBlur,
      onFocus,
      className,
      defaultValue,
      placeholder,
      type,
      disabled = false,
      withLabel = false,
      classLabel,
      label,
      inputId,
      helperText,
      error = false,
      showPassword = false,
      onShowPassword,
      isPassword = false,
      ...props
    },
    ref
  ) => {
    if (label !== '') {
      withLabel = true
    }
    // default input
    if (!withLabel && !error) {
      return (
        <div className={'w-full flex relative'}>
          <input
            type={type}
            placeholder={placeholder}
            className={cn(
              'w-full text-foreground flex placeholder:capitalize h-10 rounded-md border focus:border-2 border-input focus:border-primary bg-transparent px-3 py-2 text-sm file:border-1 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              type === 'password' && 'pr-8',
              className
            )}
            disabled={disabled}
            ref={ref}
            defaultValue={defaultValue}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            {...register}
            {...props}
          />
          {isPassword ? (
            <Text
              onClick={onShowPassword}
              size={'medium'}
              className={'right-2 top-1.5 px-1 max-w-content my-auto absolute'}
            >
              {showPassword ? (
                <p onClick={onShowPassword} className={'fa-regular fa-eye'} />
              ) : (
                <p onClick={onShowPassword} className={'fa-regular fa-eye-slash'} />
              )}
            </Text>
          ) : null}
        </div>
      )
    }
    // error only
    if (error && !withLabel) {
      return (
        <div className={'w-full flex flex-col relative'}>
          <input
            type={type}
            placeholder={placeholder}
            className={cn(
              'text-destructive flex placeholder:capitalize h-10 w-full rounded-md border focus:border-2 border-destructive focus:border-destructive bg-transparent px-3 py-2 text-sm file:border-1 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
              type === 'password' && 'pr-8',
              className
            )}
            disabled={disabled}
            onChange={onChange}
            defaultValue={defaultValue}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            {...register}
            ref={ref}
          />
          {isPassword ? (
            <Text
              // onClick={onShowPassword}
              variant={'error'}
              size={'medium'}
              className={'right-2 top-1.5 px-1 max-w-content my-auto absolute'}
            >
              {showPassword ? (
                <p onClick={onShowPassword} className={'fa-regular fa-eye'} />
              ) : (
                <p onClick={onShowPassword} className={'fa-regular fa-eye-slash'} />
              )}
            </Text>
          ) : null}
          <Text
            variant={'error'}
            size={'small'}
            className={'bottom-[-0.99rem] px-1 max-w-content ml-2 absolute'}
          >
            {helperText}
          </Text>
        </div>
      )
    }
    // label only
    if (withLabel && !error) {
      return (
        <div className={'w-full flex flex-col relative my-2'}>
          <Label
            htmlFor={inputId}
            className={`z-50 capitalize sm:bg-card bg-background top-[-0.5rem] px-1 max-w-content ml-3 absolute ${
              classLabel ?? ''
            }`}
          >
            <Text size={'small'} className={'capitalize'}>
              {label}
            </Text>
          </Label>

          <input
            type={type}
            placeholder={placeholder}
            className={cn(
              'text-foreground flex placeholder:capitalize h-10 w-full rounded-md border focus:border-2 border-input focus:border-primary bg-transparent px-3 py-2 text-sm file:border-1 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
              type === 'password' && 'pr-8',
              className
            )}
            disabled={disabled}
            ref={ref}
            defaultValue={defaultValue}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            {...register}
          />
          {isPassword ? (
            <Text size={'medium'} className={'right-2 top-1.5 px-1 max-w-content my-auto absolute'}>
              {showPassword ? (
                <Eye onClick={onShowPassword}/>
              ) : (
                <EyeClosed onClick={onShowPassword}/>
              )}
            </Text>
          ) : null}
          <Text variant={'error'} className={'bottom-[-1.3rem] px-1 max-w-content ml-3 absolute'}>
            {helperText}
          </Text>
        </div>
      )
    }

    return (
      <div className={'w-full flex flex-col relative my-2'}>
        <Label
          htmlFor={inputId}
          className={`z-50 capitalize sm:bg-card bg-background top-[-0.5rem] px-1 max-w-content ml-3 absolute ${
            classLabel ?? ''
          }`}
        >
          <Text size={'small'} variant={'error'} className={'capitalize text-destructive'}>
            {label}
          </Text>
        </Label>
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            'text-destructive flex placeholder:capitalize h-10 w-full rounded-md border focus:border-2 border-destructive focus:border-destructive bg-transparent px-3 py-2 text-sm file:border-1 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
            type === 'password' && 'pr-8',
            className
          )}
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          {...register}
          ref={ref}
        />
        {isPassword ? (
          <Text
            // onClick={onShowPassword}
            variant={'error'}
            size={'medium'}
            className={'right-2 top-1.5 px-1 max-w-content my-auto absolute'}
          >
            {showPassword ? (
              <p onClick={onShowPassword} className={'fa-regular fa-eye'} />
            ) : (
              <p onClick={onShowPassword} className={'fa-regular fa-eye-slash'} />
            )}
          </Text>
        ) : null}
        <Text
          variant={'error'}
          size={'small'}
          className={'capitalize bottom-[-0.99rem] px-1 max-w-content ml-2 absolute'}
        >
          {helperText}
        </Text>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
