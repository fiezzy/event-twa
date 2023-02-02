import { FC } from 'react'
import { Image } from 'blocks'
import { BlocksLayout } from 'features/BlocksLayout/BlocksLayout'
import { Layout } from 'features/Layout/Layout'

const App: FC = () => {
  return (
    <Layout>
      <Image />
      <BlocksLayout />
    </Layout>
  )
}

export default App
