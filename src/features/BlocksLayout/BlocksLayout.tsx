import { FC, useContext } from 'react'
import { Language, MainInfo, InvestInfo } from 'blocks'
import { EventFormat } from 'blocks/EventFormat/EventFormat'
import { BlocksNames } from 'constants/app'
import { ActiveBlockContext } from 'context'

export const BlocksLayout: FC = () => {
  const { activeBlock, changeActiveBlock } = useContext(ActiveBlockContext)

  switch (activeBlock) {
    case BlocksNames.Language:
      return <Language changeActiveBlock={changeActiveBlock} />
    case BlocksNames.MainInfo:
      return <MainInfo changeActiveBlock={changeActiveBlock} />
    case BlocksNames.InvestInfo:
      return <InvestInfo changeActiveBlock={changeActiveBlock} />
    case BlocksNames.EventFormat:
      return <EventFormat changeActiveBlock={changeActiveBlock} />
    default:
      return <div />
  }
}
