import { FC, useEffect, useContext } from 'react'
import { Image } from 'blocks'
import { CurrentUserInfoContext } from 'context'
import { BlocksLayout } from 'features/BlocksLayout/BlocksLayout'
import { Layout } from 'features/Layout/Layout'
import { useTelegram } from 'hooks/useTelegram'

const App: FC = () => {
  const { changeCurrentUserInfo } = useContext(CurrentUserInfoContext)

  const { tg, user } = useTelegram()

  useEffect(() => {
    tg.ready()

    if (user) {
      changeCurrentUserInfo({ user: user.username })

      return
    }
  }, [changeCurrentUserInfo, tg, user])

  return (
    <Layout>
      <Image />
      <BlocksLayout />
    </Layout>
  )
}

export default App
