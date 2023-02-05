import styled from 'styled-components'
import { Label } from 'ui'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`

export const ClickableLable = styled(Label)`
  cursor: pointer;
`
