
import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  0%, 50%, 100% { border-color: transparent; }
  25%, 75% { border-color: black; }
`;

export const HeroContainer = styled.section`
  display: flex;
  background: rgb(20,0,36);
  background: linear-gradient(-45deg, #FF204E, #A0153E, #5D0E41, #00224D );
  background-size: 400% 400%;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content:center;
  color: #fff;
  animation: efectMotion 15s ease infinite;

  @keyframes efectMotion {
    0%{
      background-position: 0 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    0%{
      background-position: 0 50%;
    }
  }
  #img-left {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 40px;
    left: 160px; 
  }

  #img-right {
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 40px;
    right: 160px;
  }
`;

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff; /* Mudei a cor para combinar com o fundo escuro */
    margin-bottom: 1rem;
    margin-top: 3rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    letter-spacing: -1px;
  }

  .txt-animado {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    position: relative;
    border-right: 2px solid black;
    white-space: nowrap;
    overflow: hidden;
    animation: ${blinkCaret} 1s step-end infinite;
  }
`;



