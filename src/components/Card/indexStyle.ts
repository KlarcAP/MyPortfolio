import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas com tamanhos iguais */
  gap: 20px; /* Espaçamento entre os cards */
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px; /* Espaço interno para evitar bordas coladas */
  overflow: hidden;

  /* Ajusta para 2 colunas em telas médias */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Ajusta para 1 coluna em telas pequenas */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden; /* Garante que nada vaze fora do card */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Aumenta ligeiramente o tamanho do card no hover */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz a imagem preencher o card */
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1); /* Faz um leve zoom na imagem no hover */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Fundo escurecido */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0; /* Inicialmente invisível */
    transition: opacity 0.3s ease;
    color: white;
    padding: 20px;
    text-align: center;
  }

  &:hover .overlay {
    opacity: 1; /* Mostra o overlay no hover */
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  align-items: center;
  text-align: center;

  a {
    background-color: purple;
    text-decoration: none;
    color: white;
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 0 5px; /* Espaçamento entre os links */

    /* Ajusta tamanho do botão em telas menores */
    @media (max-width: 768px) {
      width: 80px;
      height: 20px;
      font-size: 0.8rem;
    }
  }
`;
