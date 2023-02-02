import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlockProps } from 'types/app'
import { Title, Label } from 'ui'
import * as S from './style'

export const Language: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { t, i18n } = useTranslation('blockLanguage')

  const handleLangBtnClick = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language)
    changeActiveBlock('mainInfo')
  }

  return (
    <S.Wrapper>
      <Title>{t('Dubai Crypto Thursday')}</Title>
      <Label>{t('Please, select your language')}</Label>
      <S.ButtonsWrapper>
        <S.Button onClick={() => handleLangBtnClick('en')}>
          {t('English')}
        </S.Button>
        <S.Button onClick={() => handleLangBtnClick('ru')}>
          {t('Russian')}
        </S.Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
