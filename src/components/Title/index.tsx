import React, { ReactElement } from 'react'

interface TitleProps {
  textBg: string
  children: ReactElement
}

export const Title = ({ children, textBg }: TitleProps): ReactElement => {
  return (
    <div className={`relative`}>
      {children}
      <span className="absolute inset-0 -z-10 font-black text-center text-8xl text-gray-100">
        {textBg}
      </span>
    </div>
  )
}
