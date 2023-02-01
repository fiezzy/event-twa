import { FC } from 'react'
import { Language } from 'blocks'
import { Layout } from 'features/Layout/Layout'
import { SvgMain } from 'ui/icons'

const App: FC = () => {
  return (
    <Layout>
      <SvgMain />
      <Language />
    </Layout>
  )
}

export default App
