import React, { useState } from 'react'
import { Card, Input, Button, Text, Layouts } from 'components/ui'
import { ArrowRight, LockIcon, LucideMail } from 'lucide-react'
import logo from 'assets/logo.png'
import { Link } from 'react-router'

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Layouts size='container' className={'justify-center'}>
      <form>
        <Card className='w-[400px] bg-card flex flex-col p-4 py-8 gap-8'>
          <img className='w-[120px] h-[65px]' src={logo} alt={'logo of peepa'} />
          <div className='grid w-full items-center gap-4'>
            <Input placeholder={'email@example.com'} startIcon={<LucideMail size={'100%'} />} />
            <div className={'w-full flex flex-col space-y-4'}>
              <Input
                placeholder={'password'}
                startIcon={<LockIcon size={'100%'} />}
                type={showPassword ? 'text' : 'password'}
                isPassword
                showPassword={showPassword}
                onShowPassword={() => {
                  setShowPassword(!showPassword)
                }}
              />
              <Link to={'/reset-password'}>
                <Text size={'small'} className={'w-full text-end px-2 hover:text-input-primary'}>
                  Forgot Password?
                </Text>
              </Link>
            </div>
          </div>
          <Button>
            Continue
            <ArrowRight />
          </Button>
          <Text size={'small'} className={'text-lg w-full text-center'}>
            Having difficulty Signing in?
            <Link to={'/sign-up'} className={'text-input-primary hover:text-foreground-secondary'}> Contact Admin</Link>
          </Text>
        </Card>
      </form>
    </Layouts>
  )
}
