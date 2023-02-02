import { createContext, useCallback, useState } from 'react'
import { Block, FCWithChildren } from 'types/app'

type ActiveBlockContextValues = {
  activeBlock: Block
  changeActiveBlock: (block: Block) => void
}

export const ActiveBlockContext = createContext({} as ActiveBlockContextValues)

export const ActiveBlockProvider: FCWithChildren = (props) => {
  const { children } = props

  const [activeBlock, setActiveBlock] = useState<Block>('language')

  const handleActiveBlockChange = useCallback((block: Block) => {
    setActiveBlock(block)
  }, [])

  return (
    <ActiveBlockContext.Provider
      value={{ activeBlock, changeActiveBlock: handleActiveBlockChange }}
    >
      {children}
    </ActiveBlockContext.Provider>
  )
}
