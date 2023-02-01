import { FC, useState, useCallback } from 'react'
import { BlocksLayout } from 'features/BlocksLayout/BlocksLayout'
import { Layout } from 'features/Layout/Layout'
import { Block } from 'types/app'
import { SvgMain } from 'ui/icons'

const App: FC = () => {
  const [activeBlock, setActiveBlock] = useState<Block>('language')

  const handleActiveBlockChange = useCallback((block: Block) => {
    setActiveBlock(block)
  }, [])

  return (
    <Layout>
      <SvgMain />
      <BlocksLayout
        activeBlock={activeBlock}
        handleActiveBlockChange={handleActiveBlockChange}
      />
    </Layout>
  )
}

export default App
