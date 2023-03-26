import { SectionName } from '@/components/SectionName'
import { Title } from '@/components/Title'
import React, { ReactElement } from 'react'

export const About = (): ReactElement => {
  const text =
    'Cafe is a casual upscale cafe, serving breakfast all day! Enjoy our signature croissant French toast, waffles, or a scramble anytime. Full lunch menu also available, with wraps, burgers, and salad options. Thirsty? Cool down (or warm up) with tra, coffee, fresh smoothies and juices, or beer and wine - all in the perfect family-friendly environment'

  return (
    <div id="About" className={`flex flex-col items-center`}>
      <SectionName>COFFEE</SectionName>
      <div className="flex flex-col">
        <Title textBg="COFFEE">
          <div className="w-screen py-10 px-4 text-center text-xl font-bold text-slate-600">
            Find Peace & Harmony with your
          </div>
        </Title>
        <span className="text-center text-sm font-semibold text-slate-600">{text}</span>
      </div>
    </div>
  )
}
