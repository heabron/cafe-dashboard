import React, { ReactElement } from 'react'

interface BoldTextProps {
  children: ReactElement | ReactElement[] | string
}

export const BoldText = ({ children }: BoldTextProps): ReactElement => {
  return (
    <span className={`text-center text-xl font-bold text-slate-600`}>
      {children}
    </span>
  )
}
