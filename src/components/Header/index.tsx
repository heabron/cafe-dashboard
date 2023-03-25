import React, { ReactElement } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HiOutlineMenu, HiSearch, HiX } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'

export const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const onlyWidth = useWindowWidth()

  return (
    <div className={`flex justify-between bg-black px-4 py-3`}>
      {onlyWidth >= 768 ? (
        <Items />
      ) : (
        <div>
          <Dialog.Root open={isMenuOpen}>
            <Dialog.Trigger className='z-50'>
              {isMenuOpen ? (
                <HiX
                  className="relative z-50 h-6 w-6 text-white"
                  onClick={() => setIsMenuOpen(false)}
                />
              ) : (
                <HiOutlineMenu
                  className="relative z-50 h-6 w-6 text-white"
                  onClick={() => setIsMenuOpen(true)}
                />
              )}
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50"
              />
              <Dialog.Content className="fixed left-0 py-20 top-12 z-10 h-screen w-1/2 bg-black">
                <Items />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      )}
      <HiSearch className="relative z-10 h-6 w-6 text-white" />
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
    <div className="flex flex-col items-center gap-4 text-white">
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  )
}
