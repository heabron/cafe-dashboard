import React, { ReactElement } from 'react'
import { SectionName } from '../SectionName'
import { BsArrowRightShort } from 'react-icons/bs'

import { BsPlayFill } from 'react-icons/bs'
import { BoldText } from '../BoldText'

interface AboutCardProps {
  text: string
  title1: string
  title2: string
  name: string
  bg: string
  onClick?: () => void
  flip?: boolean
}

export const AboutCard = ({
  name,
  title1,
  title2,
  text,
  bg,
  onClick,
  flip,
}: AboutCardProps): ReactElement => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 p-4 z-20 md:grid-cols-2 md:place-items-center md:gap-20`}
    >
      <div
        className={`${bg} flex h-52 flex-col justify-between rounded-xl bg-cover p-10 md:justify-self-end ${
          flip && 'md:order-1'
        }`}
      >
        <div className="w-fit rounded-full bg-blue-500 p-2 text-lg text-white">
          <BsPlayFill />
        </div>
        <div className="flex items-center justify-between rounded-md bg-black bg-opacity-50 px-2 text-white">
          Lisa and Michael's Weeding
          <div className="w-fit rounded-full bg-black bg-opacity-50 p-2 text-lg text-white">
            <BsArrowRightShort />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 md:w-full md:items-start md:py-10">
        <SectionName>{name}</SectionName>
        <BoldText>
          <div>
            {title1} <br /> {title2}
          </div>
        </BoldText>
        <div
          onClick={onClick}
          className="flex cursor-pointer items-center gap-10 rounded-full p-2 text-sm font-bold text-slate-600 transition-all duration-500 hover:gap-20 hover:bg-gray-100"
        >
          {text} <BsArrowRightShort className="text-2xl" />
        </div>
      </div>
    </div>
  )
}
