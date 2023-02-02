import { FC } from 'react'
import { BlocksLayout } from 'features/BlocksLayout/BlocksLayout'
import { Layout } from 'features/Layout/Layout'
import { SvgMain } from 'ui/icons'

const App: FC = () => {
  return (
    <Layout>
      <SvgMain />
      <BlocksLayout />
    </Layout>
  )
}

export default App
