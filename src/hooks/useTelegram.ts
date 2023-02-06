import { InfoType } from 'context/CurrentUserInfoContext/CurrentUserInfoContext'

const tg = (window as any).Telegram.WebApp

export const useTelegram = () => {
  const onClose = () => {
    tg.close()
  }

  const sendData = (userInfo: InfoType) => {
    console.log(tg.sendData(JSON.stringify(userInfo)))

    tg.sendData(JSON.stringify(userInfo))
  }

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user,
    sendData,
  }
}
