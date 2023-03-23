import React, { ReactElement } from 'react'
import { Header } from '../Header'

interface Props {
  children: ReactElement
}

export const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className={``}>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}