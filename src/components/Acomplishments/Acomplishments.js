import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ExternalLinks } from '../Projects/ProjectsStyles';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Enigma Physiques', text: 'Weighlifting Belts', visit: 'https://github.com/0xEni/NFT---ERC-721---EVO' },
  { number: 'Videography', text: 'Video Editing', },
  { number: 'Youtube', text: 'Fitness Related videos - 5000 Subs', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments / Hobbies</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum> 
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
