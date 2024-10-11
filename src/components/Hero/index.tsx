import type React from 'react';
import { useState, useEffect } from 'react';
import { HeroContainer, IntroductionBox } from "./indexStyle";

export const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(200); // Velocidade da digitação

  const phrases = [
    "Front-End Developer", 
    "Mobile Developer", 
    "UX/UI Designer", 
  ];

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting 
        ? currentPhrase.substring(0, currentText.length - 1) // Deleta caracteres
        : currentPhrase.substring(0, currentText.length + 1); // Adiciona caracteres
      
      setCurrentText(updatedText);

      // Se estiver deletando, velocidade mais rápida
      setTypingSpeed(isDeleting ? 100 : 200);

      // Quando o texto estiver completo
      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de começar a deletar
      } 
      // Quando o texto estiver completamente deletado
      else if (isDeleting && updatedText === '') {
        setIsDeleting(false); // Muda para adicionar a próxima frase
        setLoopNum(loopNum + 1); // Passa para a próxima frase
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum]); // Dependências controlam a digitação e deleção

  return (
    <HeroContainer>
      <img src={require('../../assets/formaLiquida1.png')} alt="forma1"/>
      <img src={require('../../assets/formaLiquida2.png')} alt="forma2"/>
      <IntroductionBox>
        <h1>Olá! Me chamo Klarc.</h1>
        <div className="txt-animado">{currentText}</div>
      </IntroductionBox>
    </HeroContainer>
  );
};
