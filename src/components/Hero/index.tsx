import type React from 'react';
import { useState, useEffect } from 'react';
import { HeroContainer, IntroductionBox } from "./indexStyle";

export const HeroSection: React.FC = () => {

  return (
    <HeroContainer>
      <img id="background" src={require('../../assets/microchip-processor-background-realistic-style.png')} alt="Hero Left"/>
      <IntroductionBox>
        <h1>WEB DEVELOPER</h1>
        <div className="info-introduction-about-me">Sou Freelancer com 7 meses de experiência, especializado na criação de sites personalizados para pequenas e médias empresas. Tenho proficiência em HTML, CSS, JavaScript, Node e React, que utilizo para desenvolver interfaces intuitivas e responsivas.</div>
      </IntroductionBox>
    </HeroContainer>
  );
};
