import { FC, PropsWithChildren } from 'react'
import { InfoType } from 'context/CurrentUserInfoContext/CurrentUserInfoContext'
import { defaultNS, resources } from 'i18n'
import 'i18next'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string
      bgSecondary: string
      text: string
      hint: string
      link: string
      btn: string
      btnText: string
    }
  }
}

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}

export type Block =
  | 'language'
  | 'mainInfo'
  | 'investInfo'
  | 'partners'
  | 'eventFormat'
  | 'roles'
  | 'promo'
  | 'vcForm'
  | 'startupForm'
  | 'payment'
  | 'finalInfo'

export type BlockProps = {
  changeActiveBlock: (block: Block) => void
  userInfo?: InfoType
  changeCurrentUserInfo?: (info: InfoType) => void
}
