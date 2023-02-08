import { FC, useContext } from 'react'
import {
  Language,
  MainInfo,
  InvestInfo,
  Roles,
  VcForm,
  Promo,
  StartupForm,
  GuestTickets,
} from 'blocks'
import { EventFormat } from 'blocks/EventFormat/EventFormat'
import { BlocksNames } from 'constants/app'
import { ActiveBlockContext, CurrentUserInfoContext } from 'context'

export const BlocksLayout: FC = () => {
  const { activeBlock, changeActiveBlock, fromBlock } =
    useContext(ActiveBlockContext)

  const { info, changeCurrentUserInfo } = useContext(CurrentUserInfoContext)

  switch (activeBlock) {
    case BlocksNames.Language:
      return (
        <Language
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          userInfo={info}
        />
      )
    case BlocksNames.MainInfo:
      return <MainInfo changeActiveBlock={changeActiveBlock} />
    case BlocksNames.InvestInfo:
      return <InvestInfo changeActiveBlock={changeActiveBlock} />
    case BlocksNames.EventFormat:
      return (
        <EventFormat
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          fromBlock={fromBlock}
          userInfo={info}
        />
      )
    case BlocksNames.Roles:
      return (
        <Roles
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          userInfo={info}
        />
      )
    case BlocksNames.Promo:
      return (
        <Promo
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          userInfo={info}
        />
      )
    case BlocksNames.VcForm:
      return (
        <VcForm
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          fromBlock={fromBlock}
          userInfo={info}
        />
      )
    case BlocksNames.StartupForm:
      return (
        <StartupForm
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          fromBlock={fromBlock}
          userInfo={info}
        />
      )
    case BlocksNames.GuestTickets:
      return (
        <GuestTickets
          changeActiveBlock={changeActiveBlock}
          changeCurrentUserInfo={changeCurrentUserInfo}
          userInfo={info}
        />
      )
    default:
      return <div />
  }
}
