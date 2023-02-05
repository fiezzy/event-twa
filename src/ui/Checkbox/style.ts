import styled from 'styled-components'

export const Wrapper = styled.div<{ isChecked?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.btn : theme.color.bgSecondary};
  cursor: pointer;
`
