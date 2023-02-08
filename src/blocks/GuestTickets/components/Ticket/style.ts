import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  cursor: pointer;
  padding: 12px;
`
