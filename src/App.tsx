import { FC, useEffect, useContext } from 'react'
import { BlocksNames } from 'constants/app'
import { CurrentUserInfoContext, ActiveBlockContext } from 'context'
import { BlocksLayout } from 'features/BlocksLayout/BlocksLayout'
import { Layout } from 'features/Layout/Layout'
import { useTelegram } from 'hooks/useTelegram'

const App: FC = () => {
  const { changeCurrentUserInfo } = useContext(CurrentUserInfoContext)

  const { activeBlock } = useContext(ActiveBlockContext)

  const { tg, user, backButton } = useTelegram()

  useEffect(() => {
    tg.ready()

    if (user) {
      changeCurrentUserInfo({ user: user.username })
    }

    if (activeBlock !== BlocksNames.Language) {
      backButton.show()
    } else {
      backButton.hide()
    }
  }, [activeBlock, backButton, changeCurrentUserInfo, tg, user])

  return (
    <Layout>
      <BlocksLayout />
    </Layout>
  )
}

export default App
