import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        <p>Hi, My name is Vesa Malaska but my friends call me Vesku.</p>
        <p>On this page you can find info about the projects I have coded.</p>
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Read more</Button>
    </LeftSection>
  </Section>
);

export default Hero;