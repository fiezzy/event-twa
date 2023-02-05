import { FC, useState } from 'react'
import { SvgCheckMark } from 'ui/icons'
import * as S from './style'

type CheckboxProps = {
  onChange: (name: string) => void
  value?: boolean
  name: string
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { onChange, value = false, name } = props

  const [isChecked, setIsChecked] = useState<boolean>(value)

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev)
    onChange(name)
  }

  return (
    <S.Wrapper isChecked={isChecked} onClick={handleCheckboxClick}>
      {isChecked && <SvgCheckMark />}
    </S.Wrapper>
  )
}
