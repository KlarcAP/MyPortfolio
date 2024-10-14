
import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content:center;
  color: #fff;

  #background {
    width: 100%;
    height: 800px;
    position: absolute;
    z-index: 1;
    top: -110px;
    right: 10px;
  }

`;

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  width: 100%;
  padding: 5rem;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 9rem;
    font-weight: bold;
    color: #fff; /* Mudei a cor para combinar com o fundo escuro */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    letter-spacing: -1px;
  }

  .info-introduction-about-me {
    font-size: 1rem;
    color: #fff;
    margin-left: 1rem;
    width: 50%;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    position: relative;
    white-space: wrap;
    overflow: hidden;
    
  }
`;



