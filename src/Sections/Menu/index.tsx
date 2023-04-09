import { BoldText } from '@/components/BoldText'
import { SectionName } from '@/components/SectionName'
import { SubText } from '@/components/SubText'
import { Title } from '@/components/Title'
import React, { ReactElement } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { SiCoffeescript } from 'react-icons/si'
import { IconType } from 'react-icons'
import { BiCookie } from 'react-icons/bi'
import { MdFreeBreakfast } from 'react-icons/md'
import { GiFoodChain } from 'react-icons/gi'

import { Data as DATA } from './tempData.json'
import { useWindowWidth } from '@react-hook/window-size'
import { FadingDots } from 'react-cssfx-loading'

interface HeaderMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon: IconType
  text: string
  active?: boolean
}

const HeaderMenuItem = ({
  Icon,
  text,
  active = false,
  ...rest
}: HeaderMenuItemProps): ReactElement => {
  return (
    <div
      {...rest}
      className={`flex w-full cursor-pointer select-none items-center justify-center gap-4 rounded-full px-1 transition-all duration-500 hover:bg-gray-50 active:bg-gray-100 sm:w-96 sm:px-10 lg:w-full lg:p-0`}
    >
      <div className="rounded-full bg-gray-200 p-4">
        <Icon
          className={`text-3xl transition-all duration-500 ${
            active ? 'text-purplePrimary' : 'text-gray-50'
          } `}
        />
      </div>
      <span
        className={`transition-all duration-500 ${
          active ? 'font-bold text-purplePrimary' : 'text-gray-500'
        }`}
      >
        {text}
      </span>
    </div>
  )
}

interface ItemDataProps {
  name: string
  quantity: number
  gran: string
  price: number
  index: number
}

const ItemData = ({
  gran,
  name,
  price,
  quantity,
  index,
}: ItemDataProps): ReactElement => {
  const onlyWidth = useWindowWidth()

  return (
    <div
      className={`flex w-full justify-between p-2 ${
        onlyWidth >= 1024
          ? `${
              index === 0 || index === 1 || index === 2
                ? ''
                : 'border-t-2 border-gray-200'
            }`
          : `${index === 0 ? '' : 'border-t-2 border-gray-200'}`
      }`}
    >
      <div className={'flex gap-2'}>
        <span>{name}</span>
        <span className="self-end text-sm text-gray-500">
          {quantity} {gran}
        </span>
      </div>
      <span>{`$${price}`}</span>
    </div>
  )
}

export const Menu = (): ReactElement => {
  const [activeTab, setActiveTab] = React.useState<
    'coffee' | 'cookie' | 'breakfast' | 'lunch' | string
  >('coffee')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [change, setChange] = React.useState<boolean>(false)

  const text =
    'Cafe is a casual upscale cafe, serving breakfast all day! Enjoy our signature croissant French toast, waffles, or a scramble anytime. Full lunch menu also available, with wraps, burgers, and salad options. Thirsty? Cool down (or warm up) with tra, coffee, fresh smoothies and juices, or beer and wine - all in the perfect family-friendly environment'

  const tabs = [
    { name: 'Coffee & Tea', Icon: SiCoffeescript, value: 'coffee' },
    { name: 'Cookies', Icon: BiCookie, value: 'cookie' },
    { name: 'Breakfast', Icon: MdFreeBreakfast, value: 'breakfast' },
    { name: 'Lunch', Icon: GiFoodChain, value: 'lunch' },
  ]

  const onHandleClick = (tab: string) => {
    if (tab === activeTab) return

    setIsLoading(true)
    setActiveTab(tab)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }

  return (
    <div id="Menu" className={`flex flex-col items-center gap-10`}>
      <SectionName>Menu</SectionName>
      <Title textBg="COFFEE">
        <div className="z-20">
          <BoldText>Coffee and Tea with Delicious Snacks</BoldText>
        </div>
      </Title>
      <SubText>{text}</SubText>
      <div className="w-full px-4 2xl:px-20">
        <Tabs.Root
          className="flex w-full flex-col items-center rounded-2xl bg-whitePure"
          defaultValue="coffee"
        >
          <Tabs.List className="flex w-full flex-col items-center gap-4 border-b-2 border-gray-300 p-10 lg:grid lg:grid-cols-4 lg:place-items-center">
            {tabs.map((tab, index) => (
              <Tabs.Trigger
                key={index}
                className="flex w-full items-center gap-4"
                asChild
                value={tab.value}
              >
                <HeaderMenuItem
                  onClick={() => onHandleClick(tab.value)}
                  Icon={tab.Icon}
                  text={tab.name}
                  active={activeTab === tab.value}
                />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {isLoading ? (
            <div className="flex h-72 w-full items-center justify-center lg:h-52">
              <FadingDots color="#cccccc" width={75} height={75} />
            </div>
          ) : (
            <div className="w-full">
              {DATA.map((item, index) => {
                return (
                  <Tabs.Content
                    key={index}
                    value={item.name}
                    className="max-h-72 w-full overflow-y-scroll px-10 py-5 lg:overflow-auto"
                  >
                    <div
                      className={
                        'grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-x-4'
                      }
                    >
                      {item.products.map((item, index) => {
                        return <ItemData index={index} {...item} key={index} />
                      })}
                    </div>
                  </Tabs.Content>
                )
              })}
            </div>
          )}
        </Tabs.Root>
      </div>
    </div>
  )
}
