import React, { ReactElement } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface Props {
  children: ReactElement
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className={`max-w-screen overflow-x-hidden bg-white`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
