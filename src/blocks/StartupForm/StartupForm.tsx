import { FC, useCallback, useEffect } from 'react'
import { Formik, FormikConfig } from 'formik'
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

  const { onClose } = useTelegram()

  const initialValues: FormValues = {
    startupName: '',
    description: '',
    preAcceleration: '',
    teamMembersCount: 0,
  }

  const handleSubmit = useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values) => {
      changeCurrentUserInfo!({ ...userInfo, formData: values })
      onClose()
    },
    [changeCurrentUserInfo, onClose, userInfo]
  )

  useEffect(() => {}, [])

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
              <Title>Название стартапа</Title>
              <Input
                name="startupName"
                onChange={handleChange}
                value={values.startupName}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>Чем вы занимаетесь ?</Title>
              <Input
                name="description"
                onChange={handleChange}
                value={values.description}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>Готовы ли вы пройти преакселлерацию ?</Title>
              <Input
                name="preAcceleration"
                onChange={handleChange}
                value={values.preAcceleration}
              />
            </S.FieldWrapper>
            <S.FieldWrapper>
              <Title>Сколько человек в вашей команде ?</Title>
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
