import React, { ReactElement } from 'react'

interface Props {
  children: string
}

export const SectionName = ({ children }: Props): ReactElement => {
  return (
    <div
      className={`w-fit rounded-full bg-blue-200 px-2 py-1 font-bold text-blue-500`}
    >
      {children}
    </div>
  )
}
