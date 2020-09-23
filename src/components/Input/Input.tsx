import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  startAdornment?: React.ReactNode,
  value: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
}) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  display: flex;
  align-teims: center;
  background: #ffffff;
  border: 1px solid rgb(224 224 224);
  color: rgb(44, 52, 55);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 0px 0px 20px;
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  color: #2C3437;
  font-size: 18px;
  flex: 1;
  height: 48px;
  margin: 0;
  padding: 0;
  outline: none;
`

export default Input