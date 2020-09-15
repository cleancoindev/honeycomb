import React from 'react'
import styled from 'styled-components'
import beeSvg from '../../assets/img/bee.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

// const BeeIcon = <img src={beeSvg} height={60} alt="" />

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={beeSvg} height={120} />}
        title="The HoneyComb is waiting"
        subtitle="Stake Honeyswap LP tokens to claim your very own yummy Honey!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      {/* <StyledInfo>
        🏆<b>Pro Tip</b>: SUSHI-ETH UNI-V2 LP token pool yields TWICE more token
        rewards per block.
      </StyledInfo> */}
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🌼 Explore the Honeycomb" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
