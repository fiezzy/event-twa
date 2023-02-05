import styled from 'styled-components'
import { Label as UILabel } from 'ui/Label/Label'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 290px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: colunn;
  gap: 12px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled(UILabel)`
  max-width: 220px;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
