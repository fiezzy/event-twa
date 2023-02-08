import styled from 'styled-components'
import { Label as UILabel } from 'ui'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

export const TicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const Label = styled(UILabel)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.link};
`
