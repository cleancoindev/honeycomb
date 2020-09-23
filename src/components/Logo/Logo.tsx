import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bee from '../../assets/img/bee.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={bee} height="32" style={{ marginTop: -4 }} />
      <StyledText>
        Honeycomb
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: #231F20;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

export default Logo
