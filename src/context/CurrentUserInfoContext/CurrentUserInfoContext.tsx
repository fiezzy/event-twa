import { createContext, useCallback, useState } from 'react'
import { Role } from 'blocks/Roles/types'
import { FormValues } from 'blocks/VcForm/types'
import { FCWithChildren } from 'types/app'

export type InfoType = {
  user?: string
  role?: Role
  promocode?: string
  eventFormat?: string
  formData?: FormValues
}
type CurrentUserInfoContextValues = {
  info: InfoType
  changeCurrentUserInfo: (info: InfoType) => void
}

export const CurrentUserInfoContext = createContext(
  {} as CurrentUserInfoContextValues
)

export const CurrentUserInfoProvider: FCWithChildren = (props) => {
  const { children } = props

  const [currentUserInfo, setCurrentUserInfo] = useState<InfoType>({})

  console.log(currentUserInfo)

  const handeChangeCurrentUserInfo = useCallback((info: InfoType) => {
    setCurrentUserInfo(info)
  }, [])

  return (
    <CurrentUserInfoContext.Provider
      value={{
        info: currentUserInfo,
        changeCurrentUserInfo: handeChangeCurrentUserInfo,
      }}
    >
      {children}
    </CurrentUserInfoContext.Provider>
  )
}
