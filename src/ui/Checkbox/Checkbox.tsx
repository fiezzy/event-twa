import { FC, useState } from 'react'
import { SvgCheckMark } from 'ui/icons'
import * as S from './style'

type CheckboxProps = {
  onChange: (value: boolean) => void
  value?: boolean
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { onChange, value = false } = props

  const [isChecked, setIsChecked] = useState<boolean>(value)

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev)
    onChange(isChecked)
  }

  return (
    <S.Wrapper isChecked={isChecked} onClick={handleCheckboxClick}>
      {isChecked && <SvgCheckMark />}
    </S.Wrapper>
  )
}
