import React from 'react'
import { GU, Link as AragonLink, textStyle } from '@1hive/1hive-ui'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <div>
      <StyledHeader>
        Community
      </StyledHeader>
      <Link href="https://discord.gg/qPa4h5w" external>
        Discord
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
  color: #808587;
`

const StyledHeader = styled.h5`
  ${textStyle('body1')};
  margin-bottom: ${1.5 * GU}px;
`
export default Nav
