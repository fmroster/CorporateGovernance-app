import React, { useState } from 'react'
import { Card, Input, Button, Text, Layouts } from 'components/ui'
import { ArrowRight } from 'lucide-react'
import logo from 'assets/logo.png'
import { Link } from 'react-router'

export const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Layouts size='container' className={'justify-center'}>
      <form autoComplete="off">
        <Card className='w-[400px] bg-card flex flex-col p-4 py-8 gap-8'>
          <img className='w-[120px] h-[65px]' src={logo} alt={'logo of peepa'} />
          <div className='grid w-full items-center gap-4'>
            <Text size='medium'>Create a new password.</Text>
            <Input
              label='New Password'
              placeholder={'password'}
              type={showPassword ? 'text' : 'password'}
              isPassword
              showPassword={showPassword}
              onShowPassword={() => {
                setShowPassword(!showPassword)
              }}
              helperText={'helperText'}
            />
            <Input
              label='Confirm Password'
              placeholder={'password'}
              type={showPassword ? 'text' : 'password'}
              isPassword
              showPassword={showPassword}
              onShowPassword={() => {
                setShowPassword(!showPassword)
              }}
            />
          </div>
          <div className={'flex flex-col space-y-4'}>
            <Button>
              Reset password
              <ArrowRight />
            </Button>
            <Link to={''} className={'border-t border-secondary'}>
              <Text
                size={'small'}
                className={
                  'text-lg w-full text-center text-input-primary hover:text-foreground-secondary'
                }
              >
                Login
              </Text>
            </Link>
          </div>

        </Card>
      </form>
    </Layouts>
  )
}
