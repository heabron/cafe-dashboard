import React, { ReactElement } from 'react'

interface TitleProps {
  textBg: string
  children: ReactElement
}

export const Title = ({ children, textBg }: TitleProps): ReactElement => {
  return (
    <div className={`relative flex items-center`}>
      {children}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-8xl font-black text-gray-300">
        {textBg}
      </span>
    </div>
  )
}
