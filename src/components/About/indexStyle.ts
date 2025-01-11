import styled from 'styled-components';

export const AboutMe = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 6rem;

    
`;

export const AboutMeContext = styled.div`
    width: 500px;
    height: auto;
    padding: 2rem;
    z-index: 3;
    
    h1 {
        color: white;
        font-size: 2rem;
        font-weight: 200;
        text-align: justify;
        z-index: 1;

    }

    p {
        color: white;
        font-size: 1rem;
        line-height: 1.2;
        text-align: justify;

    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    
    @media (max-width: 480px) {
        gap: 1rem;
    }
    
    @media (max-width: 320px) {
        gap: 0.5rem;
    }
    
    @media (max-width: 280px) {
        gap: 0.25rem;
    }

`;

export const MyPhoto = styled.div`
  display: flex;
  width: auto;
  img {
    position: relative;
    width: 350px; /* ou qualquer tamanho desejado */
    max-width: 500px; /* Mantém a imagem proporcional */
    height: auto; /* Evita deformação */
    object-fit: cover;
    //mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    //-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Para compatibilidade com WebKit */
    margin-bottom: 5rem;
  }
  
`;

export const TechIconsContainer = styled.div`
    position: absolute;
    width: 400px; /* Define o tamanho do círculo */
    height: 500px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    /* Distribuição dos ícones ao redor do círculo */
    svg {
        position: absolute;
        transform-origin: center;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.3);
        }
    }

    svg:nth-child(1) {
        transform: translate(-50%, -50%) rotate(0deg) translate(180px) rotate(0deg);
    }
    svg:nth-child(2) {
        transform: translate(-50%, -50%) rotate(72deg) translate(230px) rotate(-72deg);
    }
    svg:nth-child(3) {
        transform: translate(-50%, -50%) rotate(144deg) translate(190px) rotate(-144deg);
    }
    svg:nth-child(4) {
        transform: translate(-50%, -50%) rotate(216deg) translate(230px) rotate(-216deg);
    }
    svg:nth-child(5) {
        transform: translate(-50%, -50%) rotate(288deg) translate(200px) rotate(-288deg);
    }
`;
