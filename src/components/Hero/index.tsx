import type React from 'react';
import { useState, useEffect } from 'react';
import { HeroContainer, IntroductionBox } from "./indexStyle";

export const HeroSection: React.FC = () => {
    const [currentText, setCurrentText] = useState<string>('');
    const phrases = ["Desenvolvedor Web", "Desenvolvedor Mobile", "Desenvolvedor UX/UI", "Desenvolvedor Back-end", "Desenvolvedor Full Stack"];
    let index = 0;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentText(phrases[index]);
        index = (index + 1) % phrases.length;
      }, 4000); // Muda a frase a cada 4 segundos
  
      return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, [phrases]);
  
    return (
      <HeroContainer>
        <IntroductionBox>
          <h1>Olá! Me chamo Klarc.</h1>
          <div className="txt-animado">{currentText}</div>
        </IntroductionBox>
      </HeroContainer>
    );
  };
  