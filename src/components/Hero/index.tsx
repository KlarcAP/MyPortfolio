import type React from 'react';
import { HeroContainer, IntroductionBox, Image } from "./indexStyle";
import ImagemHero from "../../assets/_Pngtree_web_page_design_templates_for_4977406-removebg-preview.png";

export const HeroSection: React.FC = () => {

  return (
    <HeroContainer>
      <IntroductionBox>
        <h1>Klarc Almeida</h1>
        <h2>UX/UI Designer e Front-End Developer</h2>
      </IntroductionBox>
      <Image>
        <img src={ImagemHero} alt="Foto do Klarc Almeida"/>
      </Image>
    </HeroContainer>
  );
};
