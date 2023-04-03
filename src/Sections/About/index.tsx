import { AboutCard } from '@/components/AboutCard'
import { SectionName } from '@/components/SectionName'
import { Title } from '@/components/Title'
import React, { ReactElement } from 'react'

export const About = (): ReactElement => {
  const text =
    'Cafe is a casual upscale cafe, serving breakfast all day! Enjoy our signature croissant French toast, waffles, or a scramble anytime. Full lunch menu also available, with wraps, burgers, and salad options. Thirsty? Cool down (or warm up) with tra, coffee, fresh smoothies and juices, or beer and wine - all in the perfect family-friendly environment'

  const onHandleClick = (section: 'Services' | 'Gallery') => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div id="About" className={`flex flex-col items-center pt-4`}>
      <SectionName>COFFEE</SectionName>
      <div className="flex flex-col items-center">
        <Title textBg="COFFEE">
          <div className="w-screen py-10 px-4 text-center text-xl font-bold text-slate-600">
            Find Peace & Harmony with your
          </div>
        </Title>
        <span className="px-4 text-center text-sm font-semibold text-slate-600 md:max-w-4xl">
          {text}
        </span>
        <Title textBg="TASTE">
          <AboutCard
            text={'From 5$'}
            title1={'We Fry and Brew only the'}
            title2={'Best Coffee from all Over'}
            name={'TASTE'}
            bg={'bg-coffee'}
            onClick={() => onHandleClick('Services')}
          />
        </Title>
        <Title textBg="INTERIOR">
          <AboutCard
            text={'Gallery'}
            title1={'Sterility and Complete'}
            title2={'Safety of Tattooing'}
            name={'INTERIOR'}
            bg={'bg-interior'}
            onClick={() => onHandleClick('Services')}
            flip
          />
        </Title>
      </div>
    </div>
  )
}
