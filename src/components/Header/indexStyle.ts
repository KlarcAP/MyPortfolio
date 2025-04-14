import styled from 'styled-components';

export const Container = styled.header<{ isScrolled: boolean}>`

    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    padding: 16px 32px;
    transition: background-color 0.3s ease-in-out;
    background-color: ${({ isScrolled }) => (isScrolled ? "#333" : "transparent")}; /* Cor muda com o scroll */
    color: var(--light-text);
    box-shadow: ${({ isScrolled }) => (isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none")};

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
        color: var(--light-text);
        font-size: 16px;
        font-weight: 200;
        cursor: pointer;

        &:hover {
            color: var(--light-text) blur;
            text-decoration: underline;
        }
    }
`;

export const Btn = styled.button`
    padding: 10px 20px;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;