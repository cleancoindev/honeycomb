import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  height: 110px;
  margin-bottom: 20px;
  line-height: 120px;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-family: 'Overpass', sans-serif;
  color: #2C3437;
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: #2C3437;
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
