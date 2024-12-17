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
    width: 750px;
    height: auto;
    padding: 2rem;
    border: 1px solid white;
    border-radius: 1rem;
    background-color: white transparent;
    backdrop-filter: blur(10px);
    z-index: 3;
    
    h3 {
        color: white;
        font-size: 2rem;
        font-weight: bold;
        text-align: justify;
        z-index: 1;

    }

    p {
        color: white;
        font-size: 1.2rem;
        line-height: 1.2;
        text-align: justify;
        margin: 1rem 2rem 0 1rem;
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

export const AboutMePhoto = styled.div`
    display: flex;
    margin: auto;
    img{
        width: 400px;
        height: 400px;
        border-radius: 50%;
    }
`;