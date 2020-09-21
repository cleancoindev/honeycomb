import React from 'react'
import styled from 'styled-components'

type Props = {
  fixedHeight?: boolean;
}

const Card = ({ children, fixedHeight }: React.PropsWithChildren<Props>) => <StyledCard fixedHeight={fixedHeight}>{children}</StyledCard>

// background: ${(props) => props.theme.color.grey[200]};
const StyledCard = styled.div<{ fixedHeight: boolean }>`
  height: ${(props) => (props.fixedHeight ? '140px' : 'auto')};
  background-color: white;
  border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
