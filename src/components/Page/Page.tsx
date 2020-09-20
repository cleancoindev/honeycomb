import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const darkMode = false;
const StyledPage = styled.div`
background: linear-gradient(111.63deg, ${darkMode ? '#394F50' : '#CBF3EF'} 0%, ${darkMode ? '#484E45' : '#FAFAE2'} 49.48%, ${darkMode ? '#394F50' : '#FFC3AB'} 100%);
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export default Page
