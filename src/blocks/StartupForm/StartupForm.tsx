import { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { Formik, FormikConfig } from 'formik'
import { useTranslation } from 'react-i18next'
import { BlocksNames } from 'constants/app'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Input, Button } from 'ui'
import * as S from './style'
import { validationSchema } from './validationSchema'

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
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors, setFieldValue }) => (
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
                placeholder={t('Enter name')}
                value={values.startupName}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('What do you do')} ?</Title>
              <Input
                name="description"
                onChange={handleChange}
                placeholder={t('Describe what you do')}
                value={values.description}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('Are you ready for pre-acceleration')} ?</Title>
              <Input
                name="preAcceleration"
                onChange={handleChange}
                placeholder={t('Yes / no')}
                value={values.preAcceleration}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>{t('How many people are on your team')} ?</Title>
              <Input
                name="teamMembersCount"
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  if (Number(evt.target.value) < 0) {
                    setFieldValue('teamMembersCount', 0)

                    return
                  }

                  handleChange(evt)
                }}
                type="number"
                value={values.teamMembersCount}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>Pitchdeck</Title>
              <Input
                name="pitchdeck"
                onChange={handleChange}
                placeholder={t('Enter link')}
                value={values.pitchdeck}
              />
            </S.FieldWrapper>
            <Button
              isDisabled={Object.keys(errors).length > 0}
              onClick={handleSubmit}
            >
              {t('Next')}
            </Button>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
