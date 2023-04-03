import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HiOutlineMenu, HiSearch, HiX } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'

export const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const onlyWidth = useWindowWidth()

  return (
    <div className={`flex justify-between px-4 py-3`}>
      {onlyWidth >= 768 ? (
        <Items isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <div>
          <Dialog.Root open={isMenuOpen}>
            <Dialog.Trigger className="z-10">
              {isMenuOpen ? (
                <HiX
                  className="relative z-10 h-6 w-6 text-white"
                  onClick={() => setIsMenuOpen(false)}
                />
              ) : (
                <HiOutlineMenu
                  className="relative z-10 h-6 w-6 text-white"
                  onClick={() => setIsMenuOpen(true)}
                />
              )}
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50"
              />
              <Dialog.Content className="fixed left-0 top-0 z-10 h-screen w-1/2 bg-black py-20">
                <Items isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      )}
      <HiSearch className="relative z-10 h-6 w-6 text-white" />
    </div>
  )
}

interface ItemProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const Items = ({ isMenuOpen, setIsMenuOpen }: ItemProps) => {
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

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)

    sectionElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  const onHandleClick = async (section: string) => {
    setIsMenuOpen(false)
    scrollToSection(section)
  }

  return (
    <div className="flex flex-col items-center gap-4 text-white md:flex-row">
      {items.map((item) => (
        <div
          className="cursor-pointer select-none"
          onClick={() => onHandleClick(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}
