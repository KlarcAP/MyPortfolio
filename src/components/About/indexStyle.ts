import styled from 'styled-components';

export const AboutMe = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #FF204E, #A0153E, #5D0E41, #00224D );
    background-size: 400% 400%;
    animation: AboutMeBackgroundMotion 12s ease-in-out infinite;

    @keyframes AboutMeBackgroundMotion {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        0% { background-position: 0% 50%; }
    }
`;

export const AboutMeContext = styled.div`
    display: inline-block;
    gap: 2rem;
    width: 750px;
    height: 360px;
    border: 1px solid black;
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
