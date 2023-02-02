import { FC, useContext } from 'react'
import { BlocksNames } from 'constants/app'
import { ActiveBlockContext } from 'context'
import { SvgMain, SvgInvest, SvgSecond } from 'ui/icons'

export const Image: FC = () => {
  const { activeBlock } = useContext(ActiveBlockContext)

  if (activeBlock === BlocksNames.InvestInfo) {
    return <SvgInvest />
  }

  if (
    activeBlock === BlocksNames.Language ||
    activeBlock === BlocksNames.MainInfo
  ) {
    return <SvgMain />
  }

  return <SvgSecond />
}
