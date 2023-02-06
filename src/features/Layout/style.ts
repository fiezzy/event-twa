import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.color.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
