
import styled from 'styled-components';

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
  
  width: 30%;
  padding: 5rem;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    word-wrap: break-word;
    
    color: #fff; /* Mudei a cor para combinar com o fundo escuro */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    letter-spacing: -1px;
  }

  h2{
    font-size: 1.2rem;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    white-space: wrap;
    overflow: hidden;
    font-weight: normal;
    
  }

  .btn-veja-mais{
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    width: 130px;
    height: 40px;
    white-space: nowrap;
    border-radius: 0.3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 0;
  
    h1 {
      font-size: 6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
  
    h1 {
      font-size: 4rem;
    }
  }
`;

export const Image = styled.div`
  display: flex;

  img {
    width: 500px; /* ou qualquer tamanho desejado */
    height: 600px; /* ou qualquer tamanho desejado */
    object-fit: cover;
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Para compatibilidade com WebKit */
    margin-bottom: 5rem;
  }
  
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
    }
  }
`;



