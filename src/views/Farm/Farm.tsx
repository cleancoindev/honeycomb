import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useSushi from '../../hooks/useSushi'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import useFarm from '../../hooks/useFarm'
import { getContract } from '../../utils/erc20'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { formatAddress } from '../../utils'
import { getFactoryContract } from '../../sushi/utils'

const Farm: React.FC = () => {
  const { farmId } = useParams()
  const {
    lpToken,
    tokenAddress,
    earnToken,
    name,
    icon,
    lpContract,
    poolContract
  } = useFarm(farmId) || {
    lpToken: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
    poolContract: null,
    lpContract: null,
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { ethereum } = useWallet()

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  const sushi = useSushi()
  const factoryContract = getFactoryContract(sushi)
  const [fundingAddress, setFundingAddress] = useState(null)

  useEffect(() => {
    if (!factoryContract) return
    const fetchFundingAddress = async () => {
      const { proxy } = await factoryContract.methods.pools(lpContract.options.address).call()
      setFundingAddress(proxy)
    }

    fetchFundingAddress()
  }, [sushi, factoryContract, lpContract])

  // We're still loading
  if (!lpContract || !poolContract || !fundingAddress) {
    return <></>
  }

  return (
    <>
      <PageHeader
        circle
        icon={icon}
        subtitle={`Deposit ${lpTokenName}  Tokens and earn ${earnTokenName}`}
        title={name}
      />
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest poolContract={poolContract} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake
              lpContract={lpContract}
              poolContract={poolContract}
              tokenName={lpToken.toUpperCase()}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="md" />
        <StyledAddresses>
          <div>
            <div>Funding address</div>
            <a href={`https://blockscout.com/address/${fundingAddress}`}>
              {formatAddress(fundingAddress)}
            </a>
          </div>
        </StyledAddresses>
        <Spacer size="lg" />
        <Spacer size="lg" />
      </StyledFarm>
    </>
  )
}

const StyledAddresses = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #2C3437;
  font-family: Overpass;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 80%;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
    align-items: center;
  }

  a {
    color: #2C3437;
    text-decoration: none;
    padding: 0 12px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 24px;
  }
`

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export default Farm
