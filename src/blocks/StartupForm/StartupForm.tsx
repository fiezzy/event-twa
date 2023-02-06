import { FC, useCallback, useEffect } from 'react'
import { Formik, FormikConfig } from 'formik'
import { useTranslation } from 'react-i18next'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Input, Button } from 'ui'
import * as S from './style'

export type FormValues = {
  startupName: string
  description: string
  preAcceleration: string
  teamMembersCount: number
}

export const StartupForm: FC<BlockProps> = (props) => {
  const { userInfo, changeCurrentUserInfo } = props

  const { t } = useTranslation('blockStartupForm')

  const { sendData } = useTelegram()

  const initialValues: FormValues = {
    startupName: '',
    description: '',
    preAcceleration: '',
    teamMembersCount: 0,
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
              <Title>{t('Startup name')}</Title>
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
            <Button onClick={handleSubmit}>Далее</Button>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
