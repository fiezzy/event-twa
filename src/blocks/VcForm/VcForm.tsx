import { FC, useCallback, useState } from 'react'
import { Formik, FormikConfig } from 'formik'
import { useTranslation } from 'react-i18next'
import { useTelegram } from 'hooks/useTelegram'
import { BlockProps } from 'types/app'
import { Title, Input, Checkbox, Button } from 'ui'
import {
  categoriesData,
  industriesOfInterestData,
  investmentRange,
} from './formFieldsData'
import * as S from './style'
import { ActiveFormField, FormValues } from './types'

const filterSelectedOption = (
  selectedOptions: string[],
  selectedOption: string
): string[] => {
  const isExist = selectedOptions.includes(selectedOption)

  if (isExist) {
    return selectedOptions.filter((option) => option !== selectedOption)
  }

  return [...selectedOptions, selectedOption]
}

export const VcForm: FC<BlockProps> = (props) => {
  const { userInfo, changeCurrentUserInfo } = props

  const [activeFormField, setActiveFormField] =
    useState<ActiveFormField>('category')

  const { t } = useTranslation('blockVcForm')

  const { sendData } = useTelegram()

  const initialValues: FormValues = {
    category: [],
    industriesOfInterest: [],
    investmentRange: [],
    companyName: '',
    website: '',
    link: '',
    fullName: '',
    socialLink: '',
  }

  const handleSubmit = useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values) => {
      changeCurrentUserInfo!({ ...userInfo, formData: values })
      sendData(userInfo!)
    },
    [changeCurrentUserInfo, sendData, userInfo]
  )

  const getActiveFormField = (
    values: FormValues,
    handleChange: any,
    setFieldValue: any,
    onSubmit: any,
    errors: any
  ) => {
    const handleSelectOptionsChange = ({
      fieldName,
      optionName,
    }: {
      fieldName: 'category' | 'industriesOfInterest' | 'investmentRange'
      optionName: string
    }) => {
      const filteredOptions = filterSelectedOption(
        values[fieldName],
        optionName
      )

      setFieldValue(fieldName, filteredOptions)
    }

    switch (activeFormField) {
      case 'category':
        return (
          <S.FieldWrapper>
            <Title>{t('Category')}</Title>
            <S.CheckboxesWrapper>
              {categoriesData.values.map((value) => (
                <S.CheckboxWrapper key={value}>
                  <S.Label>{value}</S.Label>
                  <Checkbox
                    name={value}
                    onChange={(name) =>
                      handleSelectOptionsChange({
                        fieldName: 'category',
                        optionName: name,
                      })
                    }
                  />
                </S.CheckboxWrapper>
              ))}
            </S.CheckboxesWrapper>
            <Button onClick={() => setActiveFormField('industriesOfInterest')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'industriesOfInterest':
        return (
          <S.FieldWrapper>
            <Title>{t('Industries of interest')}</Title>
            <S.CheckboxesWrapper>
              {industriesOfInterestData.values.map((value) => (
                <S.CheckboxWrapper key={value}>
                  <S.Label>{value}</S.Label>
                  <Checkbox
                    name={value}
                    onChange={(name) =>
                      handleSelectOptionsChange({
                        fieldName: 'industriesOfInterest',
                        optionName: name,
                      })
                    }
                  />
                </S.CheckboxWrapper>
              ))}
            </S.CheckboxesWrapper>
            <Button onClick={() => setActiveFormField('investmentRange')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'investmentRange':
        return (
          <S.FieldWrapper>
            <Title>{t('Investment Range per project')}</Title>
            <S.CheckboxesWrapper>
              {investmentRange.values.map((value) => (
                <S.CheckboxWrapper key={value}>
                  <S.Label>{value}</S.Label>
                  <Checkbox
                    name={value}
                    onChange={(name) =>
                      handleSelectOptionsChange({
                        fieldName: 'investmentRange',
                        optionName: name,
                      })
                    }
                  />
                </S.CheckboxWrapper>
              ))}
            </S.CheckboxesWrapper>
            <Button onClick={() => setActiveFormField('companyName')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'companyName':
        return (
          <S.FieldWrapper>
            <Title>{t('Fund/Company Name')}</Title>
            <Input
              error={errors.companyName}
              name="companyName"
              onChange={handleChange}
              value={values.companyName}
            />
            <Button onClick={() => setActiveFormField('website')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'website':
        return (
          <S.FieldWrapper>
            <Title>{t('Fund/Company Name Website')}</Title>
            <Input
              name="website"
              onChange={handleChange}
              value={values.website}
            />
            <Button onClick={() => setActiveFormField('link')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'link':
        return (
          <S.FieldWrapper>
            <Title>
              {t('LinkedIn & Crunchbase & AngelList profile links')}
            </Title>
            <Input name="link" onChange={handleChange} value={values.link} />
            <Button onClick={() => setActiveFormField('fullName')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'fullName':
        return (
          <S.FieldWrapper>
            <Title>{t('Full Name')}</Title>
            <Input
              name="fullName"
              onChange={handleChange}
              value={values.fullName}
            />
            <Button onClick={() => setActiveFormField('socialLink')}>
              {t('Next')}
            </Button>
          </S.FieldWrapper>
        )
      case 'socialLink':
        return (
          <S.FieldWrapper>
            <Title>
              {t(
                'Telegram or WhatsApp (to receive invitation and personal ticket tolivestream)'
              )}
            </Title>
            <Input
              name="socialLink"
              onChange={handleChange}
              value={values.socialLink}
            />
            <Button onClick={onSubmit}>{t('Next')}</Button>
          </S.FieldWrapper>
        )
    }
  }

  return (
    <S.Wrapper>
      <Title>VC Application Form</Title>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue, handleSubmit, errors }) => (
          <S.Form id="vcForm" onSubmit={handleSubmit}>
            {getActiveFormField(
              values,
              handleChange,
              setFieldValue,
              handleSubmit,
              errors
            )}
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
