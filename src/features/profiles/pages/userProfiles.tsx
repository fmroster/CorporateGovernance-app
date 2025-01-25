import React, { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage, Card, CardHeader, Input, Label, Layouts, Text } from 'components/ui'

const UserProfile: FC = () => {
  return (
    <Layouts className={'bg-teal-900'}>
      <Text size={'large'}>
        Edit Profile
      </Text>
      <Card>
        <CardHeader className={'flex flex-row items-center gap-8'}>
          <Avatar className={'w-[90px] h-[90px]'}>
            <AvatarImage className={'object-cover'} src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fHww" alt="users portrait" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className={'flex items-center'}>
            <div className="relative grid place-content-center p-2 px-8 bg-[#fffafa]/0 rounded-md border border-secondary">
              <Text>Upload new photo</Text>
              <input id="picture" type="file" className={'absolute w-full inset-0 h-full'}/>
            </div>

          </div>
        </CardHeader>
      </Card>
    </Layouts>
  )
}

export default UserProfile