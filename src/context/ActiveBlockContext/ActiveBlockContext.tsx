import { createContext, useCallback, useState } from 'react'
import { Block, FCWithChildren } from 'types/app'

type ActiveBlockContextValues = {
  activeBlock: Block
  changeActiveBlock: (block: Block, from?: Block) => void
  fromBlock?: Block
}

export const ActiveBlockContext = createContext({} as ActiveBlockContextValues)

export const ActiveBlockProvider: FCWithChildren = (props) => {
  const { children } = props

  const [activeBlock, setActiveBlock] = useState<Block>('language')
  const [fromBlock, setFromBlock] = useState<Block>()

  const handleActiveBlockChange = useCallback((block: Block, from?: Block) => {
    if (from) {
      setFromBlock(from)
    }

    setActiveBlock(block)
  }, [])

  return (
    <ActiveBlockContext.Provider
      value={{
        activeBlock,
        changeActiveBlock: handleActiveBlockChange,
        fromBlock,
      }}
    >
      {children}
    </ActiveBlockContext.Provider>
  )
}
