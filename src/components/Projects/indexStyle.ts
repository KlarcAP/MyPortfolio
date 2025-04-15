import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100vw;
  //height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: var(--background-light);
  padding: 10rem;

  h2{
    font-weight: 400;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;     
  text-align: center;     

  width: 190px;
  height: 40px;
  border-radius: 5rem;
  background-color: #F1EDFF;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 100;
`;

export const GridContainer = styled.div`
  display: grid;
  max-width: 1200px;
  height: 100%;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const GridItem = styled.div`
  width: 100%;
  height: 300px; /* Ou use min-height */
  overflow: hidden; /* Garante que a imagem não vaze do container */
  background: white;
  border-radius: 8px;
  //padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz a imagem preencher o card */
    transition: transform 0.3s ease;
  }
  &:nth-child(1) {
    display: flex;
    grid-column: span 2; // Item "HIKING" ocupa 2 colunas
    background: linear-gradient(to right, #ff8a00, #e52e71); // Gradiente do exemplo
    color: white;
    align-items: center;
    justify-content: space-evenly;
    text-align: justify;
    flex-direction: column;

    p {
      font-size: xx-large;
      padding: auto;
      width: 950px;
    }
  }

  &:nth-child(4) {
    //grid-row: span 2; // Item "OUR TEAM LEADERS" ocupa 2 linhas
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
`;