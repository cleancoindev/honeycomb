import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useWallet, ChainUnsupportedError } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { connect, status, error, reset } = useWallet()

  const [hasError, errorTitle, errorDescription] = useMemo(() => {
    if (!error) {
      return [false, null, null]
    }

    if (error instanceof ChainUnsupportedError) {
      return [
        true,
        'Wrong network',
        `Please select the xDai network in your wallet and try again.`,
      ]
    }

    return [
      true,
      'Failed to enable your account',
      'You can try another Ethereum wallet.',
    ]
  }, [error])

  useEffect(() => {
    if (status === 'connected') {
      onDismiss()
    }
  }, [status, onDismiss, error])

  return (
    <Modal>
      <ModalTitle text={hasError ? errorTitle : "Select a wallet provider."} />

      {hasError ? (
          <div>{errorDescription}</div>
        ) : (
        <ModalContent>
          <StyledWalletsWrapper>
            <StyledWalletCard>
              <WalletCard
                icon={<img src={metamaskLogo} alt="MetaMask Logo" style={{ height: 32 }} />}
                onConnect={() => connect('injected')}
                title="Metamask"
              />
            </StyledWalletCard>
          </StyledWalletsWrapper>
        </ModalContent>
      )}

      <ModalActions>
        {hasError ? 
          (
            <Button text="Try again" variant="default" onClick={reset} />
          ) : (
            <Button text="Cancel" variant="secondary" onClick={onDismiss} />
          )}
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
