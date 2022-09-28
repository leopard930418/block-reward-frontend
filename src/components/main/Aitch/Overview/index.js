import React from 'react'
import { LandingLayout } from '../../../shared/LandingLayout'

import {
  Container,
  InnerContainer,
  ItemContainer,
  ItemWrapper
} from './styles'

export const Overview = () => {

  const data = [
    {
      image: 'https://limewire.com/landing/aitch/images/editiontime.png',
      title: 'Limited Edition',
      description: 'The collection is limited to 600 artworks and 500 album artworks. There will never be more.'
    },
    {
      image: 'https://limewire.com/landing/aitch/images/mysterybox.png',
      title: 'Mystery Box',
      description: 'All non-album artworks come with the chance to win amazing extra benefits.'
    },
    {
      image: 'https://limewire.com/landing/aitch/images/disc.png',
      title: 'CD or Vinyl',
      description: 'We ship Aitch\'s new album directly to your doorstep.'
    },
  ]

  return (
    <Container bgimage="https://limewire.com/landing/aitch/images/shapes.png" id="overview">
      <LandingLayout>
        <InnerContainer>
          <h2 data-aos='fade-up' data-aos-delay="200">Collection Overview</h2>
        </InnerContainer>
        <ItemContainer>
          {data.map((item, i) =>
            <ItemWrapper key={i} data-aos='fade-up' data-aos-delay={(i+1)*100}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ItemWrapper>
          )}
        </ItemContainer>
      </LandingLayout>
    </Container>
  );
}