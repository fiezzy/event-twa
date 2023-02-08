import { FC, useCallback, useEffect } from 'react'
import { Formik, FormikConfig } from 'formik'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Input, Button } from 'ui'
import * as S from './style'

export type FormValues = {
  startupName: string
  description: string
  preAcceleration: string
  teamMembersCount: number
  pitchdeck: string
}

export const StartupForm: FC<BlockProps> = (props) => {
  const { userInfo, changeCurrentUserInfo, changeActiveBlock } = props

  const { t } = useTranslation()

  const { sendData, tg } = useTelegram()

  const initialValues: FormValues = {
    startupName: '',
    description: '',
    preAcceleration: '',
    teamMembersCount: 0,
    pitchdeck: '',
  }

  const handleSubmit = useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values) => {
      changeCurrentUserInfo!({ ...userInfo, formData: values })
    },
    [changeCurrentUserInfo, userInfo]
  )

  useEffect(() => {
    if (userInfo?.formData) {
      sendData(userInfo)
    }
  }, [sendData, userInfo])

  useEffect(() => {
    tg.onEvent('backButtonClicked', () => {
      changeActiveBlock(BlocksNames.Roles)
    })

    return () => {
      tg.offEvent('backButtonClicked', () => {
        changeActiveBlock(BlocksNames.Roles)
      })
    }
  }, [changeActiveBlock, tg])

  return (
    <S.Wrapper>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <S.Form onSubmit={handleSubmit}>
            <S.FieldWrapper>
              <Title>
                {t(
                  userInfo!.role === 'Startup' ? 'Startup name' : 'Company name'
                )}
              </Title>
              <Input
                name="startupName"
                onChange={handleChange}
                value={values.startupName}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('What do you do')} ?</Title>
              <Input
                name="description"
                onChange={handleChange}
                value={values.description}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('Are you ready for pre-acceleration')} ?</Title>
              <Input
                name="preAcceleration"
                onChange={handleChange}
                value={values.preAcceleration}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('How many people are on your team')} ?</Title>
              <Input
                name="teamMembersCount"
                onChange={handleChange}
                type="number"
                value={values.teamMembersCount}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>Pitchdeck</Title>
              <Input
                name="pitchdeck"
                onChange={handleChange}
                value={values.pitchdeck}
              />
            </S.FieldWrapper>
            <Button onClick={handleSubmit}>Далее</Button>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
