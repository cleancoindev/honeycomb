import React from 'react'
import { GU, Link as AragonLink, textStyle } from '@1hive/1hive-ui'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <div>
      <StyledHeader>
        Community
      </StyledHeader>
      <Link href="https://keybase.io/team/1hive" external>
        Keybase
      </Link>
      <Link href="https://github.com/1Hive" external>
        Github
      </Link>
      <Link href="https://twitter.com/1HiveOrg" external>
        Twitter
      </Link>
      <Link href="https://forum.1hive.org/" external>
        Forum
      </Link>
    </div>
  )
}

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

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
