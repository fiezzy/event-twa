import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BlockProps } from 'types/app'
import { Title, Label } from 'ui'
import * as S from './style'

export const EventFormat: FC<BlockProps> = (props) => {
  const { changeActiveBlock } = props

  const { t, i18n } = useTranslation('blockEventFormat')

  const handleLangBtnClick = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language)
    changeActiveBlock('mainInfo')
  }

  return (
    <S.Wrapper>
      <Title>{t('Choose format')}</Title>
      <Label>
        {t(
          'The event can be attended both online and offline at the Opus Tower (RichmanHouse) in Dubai'
        )}
      </Label>
      <S.ButtonsWrapper>
        <S.Button onClick={() => handleLangBtnClick('en')}>
          {t('Online')}
        </S.Button>
        <S.Button onClick={() => handleLangBtnClick('ru')}>
          {t('Offline')}
        </S.Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
