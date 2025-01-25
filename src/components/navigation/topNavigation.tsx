import React, { FC } from 'react'
import { Button, Layouts, Text } from '../ui'

import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { Bell, Search } from 'lucide-react'
import { ProfileAvatar } from './profileAvatar'

const links = [
  {title: 'project', to: '/project'},
  {title: 'reports', to: '/reports'},
  {title: 'insights', to: '/insights'},
  {title: 'performance', to: '/performance'},

]
export const TopNavigation: FC = () => {
  return (
    <Layouts className={'w-full flex justify-between border-b border-secondary py-4'}>
      <img className='w-[89px] h-12' src={logo} alt={'logo of company'} />
      <div className={'flex items-center justify-center space-x-6'}>
        {links.map((link, index) => (
          <Link key={index} to={link.to} className={'flex '}>
            <Text className={'text-base hover:text-primary capitalize'}>{link.title}</Text>
          </Link>
        ))}
      </div>
      <div className={'flex items-center space-x-4'}>
        <div className={'flex gap-4 mr-8 items-center'}>
          <Button size={'icon'} variant={'ghost'}>
            <Bell  className={'w-[24px] h-[24px]'}/>
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <Search className={'w-[24px] h-[24px]'}/>
          </Button>
        </div>
        <ProfileAvatar />
      </div>
    </Layouts>
  )
}