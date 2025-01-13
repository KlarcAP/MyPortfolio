
import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  width: 100%; /* Evitar 100vw para evitar problemas de scrollbar */
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow-x: hidden; /* Garantia adicional */
  overflow-y: hidden; /* Garantia adicional */
  justify-content:center;
  color: #fff;

`;

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 50%;
  padding: 1rem;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    word-wrap: break-word;
    
    color: #fff; /* Mudei a cor para combinar com o fundo escuro */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    letter-spacing: -1px;
  }

  h3{
    font-size: 1rem;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    margin-top: 1rem;
    overflow: hidden;
    word-wrap: break-word;
    font-weight: normal;
    
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
  background: radial-gradient(circle, rgb(108, 22, 199) 0%, rgba(13, 13, 13, 0.8) 65%);
  width: auto;
  img {
    position: relative;
    width: 500px; /* ou qualquer tamanho desejado */
    max-width: 500px; /* Mantém a imagem proporcional */
    height: auto; /* Evita deformação */
    object-fit: cover;
    //mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    //-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Para compatibilidade com WebKit */
    margin-bottom: 5rem;
  }
  
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem; /* Espaço entre os botões */
  flex-direction: row;

  a {
    display: inline-flex;
    text-decoration: none;
    position: relative;
  }

  button {
    padding: 15px 40px;
    width: 100px;
    height: 50px;
    border-radius: 50px;
    transition: all 0.2s;
    background-color: #fff; /* Ajuste conforme a classe desejada */
    color: #777;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

