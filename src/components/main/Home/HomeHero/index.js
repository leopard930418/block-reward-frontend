import React from 'react'
import { Button } from '../../../../styles'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  LeftWrapper,
  InnerContainer,
  ButtonGroup,
  RightWrapper,
  DetailWrapper,
  LeftSide,
  ArtistWrapper
} from './styles'
import BRFeatureBanner from '../../../../assets/images/Membership_overview1.jpg';

export const HomeHero = () => {
  const nagative = useNavigate()

  return (
    <Container>
      <InnerContainer>
        <LeftWrapper>
          <h1>
            <span className="marker">Explore, collect and trade <span className="hide_mobile">unique</span></span> <span className="marker">digital collectibles</span>
          </h1>
          <h2>LimeWire is back as an open music and entertainment<br /> NFT marketplace for creators and collectors.</h2>
          <ButtonGroup>
            <Button color='primary' onClick={() => nagative('/browse')}>Discover</Button>
            <Button color='primary' naked onClick={() => nagative('/u/dashboard')}>I'm a Creator</Button>
          </ButtonGroup>
        </LeftWrapper>
        <RightWrapper onClick={()=> nagative('/landing/aitch/')}>
          <img src={BRFeatureBanner} alt='' />
          <DetailWrapper>
            <LeftSide>
              <p>About Membership</p>
              {/* <ArtistWrapper>
                <img src='https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/2843/28433c6b-8efa-453f-bd4f-73b4314862fc_small.png' alt='' />
                <span>David</span>
                <MdcCheckDecagram />
              </ArtistWrapper> */}
            </LeftSide>
            {/* <p>Live Now</p> */}
          </DetailWrapper>
        </RightWrapper>
      </InnerContainer>
    </Container>
  )
}
