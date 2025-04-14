import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #8f45f1;     /* Roxo vibrante usado nos botões e formas */
    --text-color: #000000;        /* Texto principal preto */
    --light-text: #888888;        /* Texto de apoio em cinza claro */
    --background-dark: #1a1a1a;   /* Fundo preto usado na lateral esquerda */
    --background-light: #f9f9f9;  /* Fundo geral da direita */
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }

    @media (max-width: 480px) {
      font-size: 90%;
    }
  }

  body {
    color: var(--whiteSoft);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    background-color: var(--purpleNeon);
  }
  h1, h2, h3, h4, h5, h6, strong {
    color: var(--lilacSoft);
    font-weight: 600;
  }

  a {
    color: var(--purpleNeon);
    text-decoration: none;
  }

 

  button {
    background-color: var(--primary-color);
    //color: var(--white);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.75);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--grayDark);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    color: var(--whiteSoft);
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    color: var(--whiteSoft);
  }
`;
