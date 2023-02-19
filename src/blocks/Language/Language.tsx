import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlockProps } from 'types/app'
import { Title } from 'ui'
import * as S from './style'

export const Language: FC<BlockProps> = (props) => {
  const { changeActiveBlock, changeCurrentUserInfo } = props

  const { i18n } = useTranslation()

  const handleLangBtnClick = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language)
    changeCurrentUserInfo!({ language })
    changeActiveBlock('mainInfo')
  }

  return (
    <S.Wrapper>
      <Title>Dubai Crypto Ventures Capital Thursday</Title>

      <S.ButtonsWrapper>
        <S.Button onClick={() => handleLangBtnClick('ru')}>Русский</S.Button>
        <S.Button onClick={() => handleLangBtnClick('en')}>English</S.Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
