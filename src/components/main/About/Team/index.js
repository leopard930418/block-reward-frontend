import React from 'react'
import GrLinkedin from '@meronex/icons/gr/GrLinkedin';

import {
  Container,
  SectionHeader,
  TeamWraper,
  TeamItem,
  MemeberDetail,
  MemberName,
  MemberTitle,
  MemberDescription,
  MemberLink
} from './styles'

export const Team = () => {

  const data = [
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "adsfasdf"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
    {
      image: "https://limewire.com/img/team_marcus.png",
      name: "Marcus Feistl",
      link: "https://www.linkedin.com/in/paulzehetmayr/",
      title: "Artist Acquisition",
      description: ""
    },
  ]

  return (
    <Container>
      <SectionHeader>
        <h2>BlockReward Management Team</h2>
      </SectionHeader>
      <TeamWraper>
        {data.map((item, i) =>
          <TeamItem key={i}>
            <MemeberDetail>
              <img src={item.image} alt='' />
              <MemberLink href={item.link} target="_blank" rel="noreferrer">
                <span>Find on</span> <GrLinkedin size="20"/>
              </MemberLink>
              <MemberName>{item.name}</MemberName>
              <MemberTitle>{item.title}</MemberTitle>
              <MemberDescription>{item.description}</MemberDescription>
            </MemeberDetail>
          </TeamItem>
        )}
      </TeamWraper>
    </Container>
  )
}