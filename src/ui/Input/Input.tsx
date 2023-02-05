import { ChangeEvent, HTMLInputTypeAttribute, FC } from 'react'
import * as S from './style'

export type InputProps = {
  className?: string
  disabled?: boolean
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  error?: boolean
  placeholder?: string
  name?: string
  type?: HTMLInputTypeAttribute
  max?: number
  min?: number
}
export const Input: FC<InputProps> = (props) => {
  const {
    className,
    disabled,
    onChange,
    value,
    error,
    placeholder,
    name,
    type,
    max,
    min,
  } = props

  return (
    <S.Input
      className={className}
      disabled={disabled}
      error={error}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}
