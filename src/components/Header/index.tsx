import React, { ReactElement } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HiOutlineMenu, HiSearch } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'

export const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const onlyWidth = useWindowWidth()

  return (
    <div className={`flex justify-between px-4 py-3 bg-black`}>
      {onlyWidth >= 768 ? <Items /> : <HiOutlineMenu className='text-white w-6 h-6' />}
      <HiSearch className='text-white w-6 h-6'/>
    </div>
  )
}

const Items = () => {
  const items = [
    {
      name: 'About',
    },
    {
      name: 'Services',
    },
    {
      name: 'Reviews',
    },
    {
      name: 'Contacts',
    },
  ]

  return (
    <div className="flex gap-4 text-white">
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  )
}
