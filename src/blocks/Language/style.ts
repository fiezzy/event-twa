import styled from 'styled-components'
import { Button as UIButton } from 'ui/Button/Button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.text};
`

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.hint};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Button = styled(UIButton)`
  width: 50%;
`
