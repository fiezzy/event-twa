import { FC } from 'react'
import { Language, MainInfo } from 'blocks'
import { Block } from 'types/app'

type BlockLayout = {
  activeBlock: Block
  handleActiveBlockChange: (block: Block) => void
}

export const BlocksLayout: FC<BlockLayout> = (props) => {
  const { activeBlock, handleActiveBlockChange } = props

  switch (activeBlock) {
    case 'language':
      return <Language changeActiveBlock={handleActiveBlockChange} />
    case 'mainInfo':
      return <MainInfo />
    default:
      return <div />
  }
}
