import React from 'react'

import {
  Container,
  SectionHeader
} from './styles'

export const ShortAbout = () => {
  return (
    <Container>
      <SectionHeader>
        <h2>BlockReward is Back</h2>
      </SectionHeader>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lnbEBWEOtYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
      <br /><br />
      <SectionHeader>
        <h2>About BlockReward</h2>
      </SectionHeader>
      <p>
        BlockReward has been relaunched as a digital collectibles marketplace for music and the broader art and entertainment space. Our new team, led by co-CEOs Paul and Julian Zehetmayr is on a mission to open up the NFT collectibles space to everybody by drastically improving user experience, offering credit card payments and handling gas fees as well as technical hurdles on behalf of users, while leveraging all the benefits of Web3.
      </p>
      <br />
      <p>
        On the BlockReward marketplace, music fans and collectors can buy and trade a variety exclusive music-related assets, such as limited editions, pre-release music, unreleased demos, graphical artwork, unseen live versions, as well as digital merchandise and backstage content. Our aim is to make onboarding easy for anyone, with a quick and easy signup, seamless KYC and items priced in US dollars. A crypto wallet is not required, and purchases can be made directly via credit card (or crypto) thanks to our partner Wyre. The marketplace itself is designed to have an intuitive, state-of-the-art user experience and make it easy for anyone to start exploring the exciting world of NFTs.
      </p>
    </Container>
  )
}