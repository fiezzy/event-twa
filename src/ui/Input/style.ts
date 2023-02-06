import styled from 'styled-components'

export const Input = styled.input<{ error?: boolean; disabled?: boolean }>`
  color: ${({ theme }) => theme.color.text};
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  width: 100%;
  outline: none;
  border: none;
  padding: 14px 16px;
  border-radius: 10px;
  border: ${({ error }) => error && `1px solid red`};

  &::placeholder {
    color: ${({ theme }) => theme.color.hint};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-deмlay: 9999s;
    -webkit-text-fill-color: ${({ theme }) => theme.color.hint};
  }
`
