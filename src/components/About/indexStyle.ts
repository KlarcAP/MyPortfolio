import styled from 'styled-components';

export const AboutMe = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const AboutMeContext = styled.div`
    display: inline-block;
    gap: 2rem;
    width: 750px;
    height: 360px;
    border: 1px solid white;
    border-radius: 2rem;
    background-color: transparent;
    backdrop-filter: blur(30px);

    

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
        line-height: 1.5;
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
