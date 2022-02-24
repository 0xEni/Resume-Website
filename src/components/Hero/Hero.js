import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      Adrian's Portfolio
    </SectionTitle>
    <SectionText>
      Aspiring Web 3 Developer
    </SectionText>
    <Button onClick={() => window.location = '#technologies'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;