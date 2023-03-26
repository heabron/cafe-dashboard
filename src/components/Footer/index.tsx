import Image from 'next/image'
import React, { ReactElement } from 'react'
import { Rating } from '@mui/material'
import { FaStar } from 'react-icons/fa'

export const Footer = (): ReactElement => {
  const links = ['Home', 'Gallery', 'Services', 'About', 'Customers', 'Contact']

  const scrollToSection = (link: string): void => {
    const section = document.getElementById(link)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <div className={`flex flex-col items-center`}>
      <header className="grid w-full grid-cols-1 place-items-center gap-4 border-t-2 border-slate-200 py-10 md:grid-cols-3">
        {/* <Image src={''} alt={''} /> */}
        <h1>LOGO</h1>
        <div className="grid grid-cols-3 place-items-center gap-4">
          {links.map((link, index) => (
            <div
              onClick={() => scrollToSection(link)}
              className="text-sm font-semibold text-slate-600"
              key={index}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Rating
            icon={<FaStar className="text-blue-400" />}
            name="read-only"
            value={5}
            readOnly
          />
          <span className="text-sm font-semibold text-slate-600">
            5.244 Satisfied Costumers
          </span>
        </div>
      </header>
      <footer className="flex w-full justify-center border-t-2 border-slate-200 py-10">
        <span className="text-xs">@2023 All Rights Reserved</span>
      </footer>
    </div>
  )
}
