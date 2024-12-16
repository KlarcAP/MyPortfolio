import styled from 'styled-components';

export const Container = styled.header`

    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent !important; 
    position: fixed;
    z-index: 1;

    img{
        width: 200px;
        height: 240px;
        transition: transform 0.3s ease;
    }

`;

export const Nav = styled.nav`

    display: flex;
    gap: 2rem;


    a{
        color: #ffffff;
        cursor: pointer;
    }
`;

export const Btn = styled.button`

    padding: 10px 20px;
    border-radius: 1rem;
    background-color: #ffffff;
    color: #333;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

`;