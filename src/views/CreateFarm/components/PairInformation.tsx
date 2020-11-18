import React from 'react'
import styled from 'styled-components'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'

interface PairDataToken {
  symbol: string
}

interface PairData {
  token0: PairDataToken
  token1: PairDataToken
  reserveETH: string
}

interface PairInformationProps {
  data: PairData
  hasPool: boolean
}

const PairInformation: React.FC<PairInformationProps> = ({ data, hasPool }) => {
  if (!data) {
    return <></>
  }

  return (
    <StyledCardWrapper>
      <Card>
        <CardContent>
          <StyledCardContent>
            <div>{`${data.token0.symbol}-${data.token1.symbol}`}</div>
            <div style={{
              fontSize: '18px',
              fontWeight: 'normal'
            }}>
              {hasPool
                ? 'There is already an existing farm for this pair.'
                : 'You can create this farm.'}
            </div>
          </StyledCardContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const StyledCardWrapper = styled.div`
  max-width: 900px;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContent = styled.div`
  color: #2C3437;
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export default PairInformation
