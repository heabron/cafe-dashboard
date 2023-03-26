import React, { ReactElement } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HiOutlineMenu, HiSearch, HiX } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'

export const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const onlyWidth = useWindowWidth()

  return (
    <div className={`flex justify-between px-4 py-3`}>
      {onlyWidth >= 768 ? (
        <Items />
      ) : (
        <div>
          <Dialog.Root open={isMenuOpen}>
            <Dialog.Trigger className="z-50">
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
              <Dialog.Content className="fixed left-0 top-12 z-10 h-screen w-1/2 bg-black py-20">
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

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 text-white md:flex-row">
      {items.map((item) => (
        <div
          className="cursor-pointer select-none"
          onClick={() => scrollToSection(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}
