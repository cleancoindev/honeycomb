import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'

interface ButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  href?: string,
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary'
  background?: string,
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
  background,
}) => {
  const { spacing } = useContext(ThemeContext)

  let buttonColor = '#2C3437'
  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      boxShadow = `0px 1px 2px rgba(0, 0, 0, 0.08)`
      buttonPadding = spacing[4]
      buttonSize = 36
      fontSize = 14
      break
    case 'lg':
      boxShadow = `0px 1px 2px rgba(0, 0, 0, 0.08)`
      buttonPadding = spacing[4]
      buttonSize = 72
      fontSize = 16
      break
    case 'md':
    default:
      boxShadow = `0px 1px 2px rgba(0, 0, 0, 0.08)`
      buttonPadding = spacing[4]
      buttonSize = 40
      fontSize = 14
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{text}</StyledExternalLink>
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <StyledButton
      boxShadow={boxShadow}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
      background={disabled ? '#E9E9E9' : background}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  boxShadow: string,
  color: string,
  disabled?: boolean,
  fontSize: number,
  padding: number,
  size: number
  background?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${props => props.background || "linear-gradient(268.53deg, #aaf5d4 0%, #7ce0d6 100%)"};
  color: ${props => props.color};
  align-items: center;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  height: ${props => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.color.grey[100]};
  }
  box-shadow: ${props => props.boxShadow};
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 40px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[3]}px;
  padding: 0 ${props => props.theme.spacing[3]}px;
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 40px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[3]}px;
  padding: 0 ${props => props.theme.spacing[3]}px;
  text-decoration: none;
`

export default Button