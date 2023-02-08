import styled from 'styled-components'
import { Button as UIButton } from 'ui'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Button = styled(UIButton)`
  width: 50%;
`

export const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`
