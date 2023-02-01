import styled from 'styled-components'

export const Wrapper = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.color.btn};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.btnText};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`
