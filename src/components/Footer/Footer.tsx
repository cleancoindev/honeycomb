import React from 'react'
import styled from 'styled-components'
import { GU, Link as AragonLink, textStyle } from '@1hive/1hive-ui'

import Nav from './components/Nav'
import Layout from './components/Layout'
import logoSvg from '../../assets/img/bee.svg'

const Footer: React.FC = () => {
  return (
    <StyleOuterWrap>
      <StyleInnerWrap>
        <StyledFooter>
          <Layout>
            <StyledFooterInner>
              <StyledLogo>
                <img src={logoSvg} height="40" alt="" />
              </StyledLogo>
              <Nav />
              <div>
                <StyledHeader>
                  Tools
                </StyledHeader>
                <Link
                  href="https://www.notion.so/1Hive-Community-Handbook-f66d489df85a4011bac681963bfee796"
                  external
                >
                  Handbook
                </Link>
              </div>
            </StyledFooterInner>
          </Layout>
        </StyledFooter>
      </StyleInnerWrap>
    </StyleOuterWrap>
  );
}

const StyleOuterWrap = styled.div`
  ${`transform: translateY(-${4 * GU}px);`}
  flex: 1 0 auto;
`
const StyleInnerWrap = styled.div`
  align-items: center;
  height: 100%;
`
const Link = styled(AragonLink)`
  display: block;
  margin-bottom: ${1.5 * GU}px;
  text-align: left;
  text-decoration: none;
`
const StyledHeader = styled.h5`
  ${textStyle('body1')};
  margin-bottom: ${1.5 * GU}px;
`
const StyledLogo = styled.div`
  margin-top: 30px;
  width: ${40 * GU}px;
  align-items: center;
`
const StyledFooter = styled.footer`
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  padding: ${5 * GU}px 0;
`
const StyledFooterInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  & > div {
    margin-bottom: ${2 * GU}px;

    &:not(:first-child) {
      width: ${25 * GU}px;
    }
  }
`

export default Footer