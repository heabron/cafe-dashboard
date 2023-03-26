import Image from 'next/image'
import React, { ReactElement } from 'react'

import homeImage from '@/assets/images/homeImage.jpg'

import { RiNavigationFill } from 'react-icons/ri'
import { HiPhone } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { HomeData } from '@/components/HomeData'

export const Home = (): ReactElement => {
  const itens = [
    {
      icon: RiNavigationFill,
      text: '225 S 1st St Brooklyn, NY 11211',
    },
    {
      icon: HiPhone,
      text: '(929) 355-0147',
    },
    {
      icon: MdEmail,
      text: 'hotel@gmail.com',
    },
  ]

  const ScrollToAbout = () => {
    const section = document.getElementById('About')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div
      className={`flex h-[90vh] flex-col items-center justify-between px-4 pt-10 text-center text-white`}
    >
      <Image
        src={homeImage}
        alt={'Home Image'}
        width={1920}
        height={1080}
        className="absolute top-0 left-0 -z-10 h-screen w-screen brightness-[0.5]"
      />
      <span className="w-fit rounded-full bg-blue-500 p-2">COFFEE</span>
      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p>Delicious Coffee & Cozy Interior</p>
        <p>in DownTown Chicago</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
        {/* <HomeData /> */}
        {itens.map((item, index) => (
          <HomeData
            key={index}
            icon={<item.icon className="text-xl" />}
            text={item.text}
          />
        ))}
      </div>
      <button
        onClick={ScrollToAbout}
        className="z-10 rounded-full bg-white p-4 font-bold text-black shadow-md transition-all duration-500 hover:bg-gray-200 hover:shadow-lg"
      >
        Show More
      </button>
    </div>
  )
}
