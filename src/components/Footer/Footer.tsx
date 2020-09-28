import React from 'react'
import styled from 'styled-components'
import { GU } from '@1hive/1hive-ui'

import Container from '../Container'
import Nav from './components/Nav'
import logoSvg from '../../assets/img/logo.svg'

const Footer: React.FC = () => {
  return (
    <StyleOuterWrap>
      <StyleInnerWrap>
        <Container size="lg">
          <StyledFooter>
            <StyledFooterInner>
              <StyledLogo>
                <img src={logoSvg} height="40" alt="" />
              </StyledLogo>
              <Nav />
            </StyledFooterInner>
          </StyledFooter>
        </Container>
      </StyleInnerWrap>
    </StyleOuterWrap>
  );
}

const StyleOuterWrap = styled.div`
  flex: 1 0 auto;
`
const StyleInnerWrap = styled.div`
  align-items: center;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`
const StyledLogo = styled.div`
  margin-top: 30px;
  width: ${40 * GU}px;
  align-items: center;
`
const StyledFooter = styled.footer`
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  padding: ${5 * GU}px;
`
const StyledFooterInner = styled.div`
  display: flex;
  align-items: flex-start;

  & > div {
    margin-bottom: ${2 * GU}px;

    &:not(:first-child) {
      width: ${25 * GU}px;
    }
  }
`

export default Footer