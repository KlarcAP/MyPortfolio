
import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  0%, 50%, 100% { border-color: transparent; }
  25%, 75% { border-color: black; }
`;

export const HeroContainer = styled.section`
  display: flex;
  background: rgb(20,0,36);
  background: linear-gradient(0deg, rgba(20,0,36,0.944) 0%, rgba(67,9,121,1) 22%, rgba(175,0,255,1) 89%);
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #fff;

  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 1px solid black;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
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



