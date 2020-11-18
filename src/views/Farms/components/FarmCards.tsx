import BigNumber from 'bignumber.js'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress } from '../../../sushi/utils'
import useFarms from '../../../hooks/useFarms'
import useTokenPrice from '../../../hooks/useTokenPrice'
import { INTEGERS } from '../../../sushi/lib/constants'
import { lpTokenValue } from '../../../utils/lpToken'

interface FarmWithApy extends Farm {
  apy: BigNumber,
  poolAddress?: string
}

const curatedActiveFarms = [
  // HNY-LINK
  "0x90d029ddbf3fb4662eceefb7f31d052f4e07856e",
  // WBTC-WETH
  "0xadcd8e1699158627f072b080528f0ea6d020e46a",
  // WBTC-XDAI
  "0x704876d066cded601f668ee2da0519da465cbf93",
]

const FarmCards: React.FC = () => {
  const farms = useFarms()
  const sushi = useSushi()

  // Get Honey price
  // TODO(onbjerg): We can make this more dynamic
  // by getting the reward token address per pool
  // instead of assuming it is Honey
  const honeyAddress = getSushiAddress(sushi)
  const honeyPrice = useTokenPrice(
    honeyAddress
  )

  // Calculate APYs
  const [apy, setApy] = useState<
    {[farmId: string]: BigNumber}
  >({})
  useEffect(() => {
    async function calculateApys() {
      const result: {
        [farmId: string]: BigNumber
      } = {}
      for (const farm of farms) {
        if (farm.rewardRate.isZero()) {
          continue
        }

        result[farm.id] = honeyPrice
          .times(farm.rewardRate)
          .times(INTEGERS.ONE_YEAR_IN_SECONDS)
          .div(farm.staked)
          .div(await lpTokenValue(farm.lpContract))
      }
      setApy(result)
    }

    calculateApys()
  }, [farms, honeyPrice])

  // Decorate farms with APYs
  const farmsWithApy = farms
    .map<FarmWithApy>((farm) => ({
      ...farm,
      apy: apy[farm.id]
    }))
    .sort((a, b) => b.rewards.minus(a.rewards).toNumber())

  const ACTIVE_THRESHOLD = new BigNumber(0.5)

  const activeFarms = farmsWithApy
    .filter((farm) => farm.rewards.gt(ACTIVE_THRESHOLD))
    .filter((farm) => curatedActiveFarms.includes(farm.poolAddress))

  // Hotfix until we fix APY calculation
  const endedRewardsFarms = farmsWithApy
    .filter((farm) => farm.rewards.gt(ACTIVE_THRESHOLD))
    .filter((farm) => !curatedActiveFarms.includes(farm.poolAddress))

  const inactiveFarms = farmsWithApy
    .filter((farm) => farm.rewards.lt(ACTIVE_THRESHOLD))

  return (
    <>
      <FarmSectionHeader>Active farms</FarmSectionHeader>
      <FarmSectionDescription>Farms that currently give rewards.</FarmSectionDescription>
      <StyledCards>
        {!!activeFarms.length ? (
          activeFarms.map((farm, i) => (
            <FarmCard farm={farm} key={i} />
          ))
        ) : (
          <StyledLoadingWrapper>
            <Loader text="Loading..." />
          </StyledLoadingWrapper>
        )}
      </StyledCards>
      <Spacer size='md' />
      <FarmSectionHeader>Inactive farms</FarmSectionHeader>
      <FarmSectionDescription>
        These are farms that have no rewards. They will only get rewards if a funding proposal for them passes.
      </FarmSectionDescription>
      <StyledCards>
        {!!inactiveFarms.length ? (
          endedRewardsFarms.concat(inactiveFarms).map((farm, i) => (
            <FarmCard farm={farm} key={i} />
          ))
        ) : (
          <StyledLoadingWrapper>
            <Loader text="Loading..." />
          </StyledLoadingWrapper>
        )}
      </StyledCards>
    </>
  )
}

interface FarmCardProps {
  farm: FarmWithApy
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  return (
    <StyledCardWrapper>
      <Card>
        <CardContent>
          <StyledContent>
            <CardIcon>{farm.icon}</CardIcon>
            <StyledTitle>{farm.name}</StyledTitle>
            <StyledDetails>
              <StyledDetail>Deposit {farm.lpToken.toUpperCase()}</StyledDetail>
              <StyledDetail>Earn {farm.earnToken}</StyledDetail>
            </StyledDetails>
            <Spacer />
            <Button
              text={'Select'}
              to={`/farms/${farm.id}`}
            />
            <StyledInsight>
              <span>APY</span>
              <span>
                {farm.apy
                  ? `${farm.apy
                      .times(new BigNumber(100))
                      .toNumber()
                      .toLocaleString('en-US')
                      .slice(0, -1)}%`
                  : '-'}
              </span>
              <span>
                {farm.rewards
                  ? (farm.rewards.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                {farm.earnToken}
              </span>
              <span>
                {farm.staked
                  ? (farm.staked.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                LP
              </span>
            </StyledInsight>
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const FarmSectionHeader = styled.h1`
  font-family: 'Overpass', sans-serif;
  color: #2C3437;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

const FarmSectionDescription = styled.p`
  color: #2C3437;
`

const StyledCards = styled.div`
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  margin: ${(props) => props.theme.spacing[2]}px;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  margin-top: 0;
  position: relative;
`

const StyledTitle = styled.h4`
  color: #2C3437;
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: #2C3437;
  font-weight: 200;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: #818181;
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 13px;
  text-align: center;
`

export default FarmCards
