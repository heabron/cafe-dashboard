import React, { ReactElement } from 'react'

interface HomeDataProps {
  icon: ReactElement
  text: string
}

export const HomeData = ({ icon, text }: HomeDataProps): ReactElement => {
  return (
    <div className={`flex items-center  gap-4 text-xs text-white`}>
      {icon}
      <span>{text}</span>
    </div>
  )
}
