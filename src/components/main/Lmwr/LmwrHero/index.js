import React from 'react'
import { LayoutContainer } from '../../../shared'
import { Button } from '../../../../styles'
import { useTheme } from 'styled-components'
import {
  ComponentWraper,
  Container,
  LeftWrapper,
  RightWrapper,
  ButtonGroup,
  ImgWrapper
} from './styles'

export const LmwrHero = () => {
  const theme = useTheme()

  return (
    <ComponentWraper>
      <LayoutContainer>
        <Container>
          <LeftWrapper>
            <h1>
              <span className="marker">Block Reward Token What it is</span> <span className="marker">and how it works</span>
            </h1>
            <h2>
            Block Reward Tokens (BRT) are earned when consumers purchase from businesses that are in the Block Rewards Ecosystem. Customers can use the tokens they earn to redeem discounts, limited-time offers or other promotional activities. Members of Block Reward will have the ability to earn more BRT.  Block Reward token will be used to upgrade your Membership to higher tiers offered by businesses. Hosting these tokens on the Algorand Blockchain allows for easy accounting of rewards in circulation and can provide business analytics through its public ledger.
              <br /><br />
              Join our waitlist to stay up-to-date:
            </h2>
            <ButtonGroup>
              <Button color='primary'>Get Notified</Button>
            </ButtonGroup>
          </LeftWrapper>
          <RightWrapper>
            <ImgWrapper>
              {/* <h2>Timeline</h2> */}
              <img src={theme.images.timeLine} alt='' />
            </ImgWrapper>
          </RightWrapper>
        </Container>
      </LayoutContainer>
    </ComponentWraper>
  )
}
