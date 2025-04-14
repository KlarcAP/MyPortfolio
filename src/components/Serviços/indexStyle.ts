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

export const Servico = styled.div`
    width: 280px;
    height: 370px;
    box-shadow: 2rem 1rem;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    text-align: center;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        
        
    }
    span {
        color: var(--primary-color);
        font-size: 40px;
        font-weight: 900;
    }
    h3 {
        margin: 0.5rem 0;
        color: var(--text-color);
    }

    p{
        margin: 0;
        font-size: 14px;
        color: var(--light-text);
        padding-bottom: 26px;
    }
`;

export const Servicos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 2 colunas de tamanho igual */
    gap: 2rem; /* Espaço entre os itens */
    padding: 20px;

`;

export const ButtonView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    width: 100px;
    height: 30px;
    background-color: var(--primary-color);
    color: var(--white);
    font-size: 10px;
    border-radius: 2rem;
`;