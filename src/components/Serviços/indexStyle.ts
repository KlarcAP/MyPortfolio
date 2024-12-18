import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    color: #fff;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    margin-bottom: 0.15rem;
    font-weight: 400;
`;

export const Servico = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    h3 {
        margin: 0.5rem 0;
        color: black;
    }

    p{
        margin: 0;
        color: black
    }
`;

export const Servicos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 2 colunas de tamanho igual */
    gap: 16px; /* Espaço entre os itens */
    padding: 20px;

`;

