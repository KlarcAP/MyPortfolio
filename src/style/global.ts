import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blackPrimary: #0D0D0D; /* Preto Profundo - Fundo principal */
    --grayDark: #1A1A1A; /* Cinza Escuro - Elementos secundários */
    --lilacSoft: #9F86C0; /* Lilás Suave - Textos/detalhes */
    --purpleNeon:rgb(108, 22, 199); /* Púrpura Neon - Destaques */
    --pinkNeon: rgb(108, 22, 199); /* Rosa Neon - Hover e Detalhes */
    --whiteSoft: #EAEAEA; /* Branco Suave - Contraste */
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
    background-color: var(--blackPrimary);
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

  a:hover {
    color: var(--pinkNeon);
  }

  button {
    background-color: var(--purpleNeon);
    color: var(--blackPrimary);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: var(--pinkNeon);
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
