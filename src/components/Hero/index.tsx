import type React from 'react';
import { useState, useEffect } from 'react';
import { HeroContainer, IntroductionBox } from "./indexStyle";

export const HeroSection: React.FC = () => {

  return (
    <HeroContainer>
      <IntroductionBox>
        <h1>Klarc Almeida</h1>
        <h2>UX/UI Designer e Front-End Developer</h2>
      </IntroductionBox>
    </HeroContainer>
  );
};
