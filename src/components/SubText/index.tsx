import React, { ReactElement } from 'react'

interface SubTextProps {
  children: string
}

export const SubText = ({ children }: SubTextProps): ReactElement => {
  return (
    <span
      className={`px-4 text-center text-sm font-semibold text-slate-500 md:max-w-4xl`}
    >
      {children}
    </span>
  )
}
