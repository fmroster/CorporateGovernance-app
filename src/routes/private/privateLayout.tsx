import React from 'react'
import { Outlet } from 'react-router'
import { TopNavigation } from 'components/navigation/topNavigation'
import { Layouts } from 'components/ui'

export const PrivateLayout: React.FC = () => {
  return (
    <Layouts size={'container'}>
      <TopNavigation />
      <Outlet />
    </Layouts>
  )
}