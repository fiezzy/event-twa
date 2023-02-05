const tg = (window as any).Telegram.WebApp

export const useTelegram = () => {
  const onClose = () => {
    tg.close()
  }

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user,
  }
}
