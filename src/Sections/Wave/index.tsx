import React, { ReactElement } from 'react'

export const Wave = (): ReactElement => {
  return (
    <div className={`block bg-white h-10`}>
      <svg
        className={`w-full -translate-y-[100%] rotate-180`}
        viewBox="0 0 767 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 0 100 C 213.6 100 142.4 24 356 24 L 356 24 L 356 0 L 0 0 Z"
          stroke-width="0"
        ></path>{' '}
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 355 24 C 602.2 24 519.8 100 767 100 L 767 100 L 767 0 L 355 0 Z"
          stroke-width="0"
        ></path>{' '}
      </svg>
    </div>
  )
}
