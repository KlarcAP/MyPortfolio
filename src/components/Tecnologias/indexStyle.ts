import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 2rem auto;
    
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 200px;
    gap: 5rem;
`;

export const Content = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    width: 120px;
    height: 80px;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #666;
`;

export const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80px;

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        color: #ffffff; 
        margin: 0;
    }
`;
