import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div`
background: white;
`

const StyledMain = styled.div`
  background: linear-gradient(111.63deg, #CBF3EF 0%, #FAFAE2 49.48%, #FFC3AB 100%);
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export default Page
