import { HashLoader } from 'react-spinners'
import { Text } from './text'
import { Layouts } from './layouts'
import React from 'react'

export const Loader = () => {
  return (
    <Layouts size={'container'} className={'grid place-content-center place-items-center gap-8'}>
      <HashLoader
        color="#ff5c5c"
        size={90}
      />
      <Text size={'medium'}>Please wait ...</Text>
    </Layouts>

  )
}