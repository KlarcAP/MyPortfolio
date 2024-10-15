import styled from 'styled-components';

export const AboutMe = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    
`;

export const AboutMeContext = styled.div`
    width: 750px;
    height: 360px;
    margin: auto 1rem;
    border: 1px solid white;
    border-radius: 2rem;
    background-color: white transparent;
    backdrop-filter: blur(10px);

    h2 {
        color: var(--text-title);
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem 0 0 1rem;
        color: #ffff;
    }

    p {
        color: var(--text-title);
        font-size: 1.2rem;
        line-height: 1.2;
        margin: 1rem 2rem 0 1rem;
        color: #ffff;
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