import styled from 'styled-components';

export const Container = styled.header`

    height: 80px;
    display: flex;
    background-color: transparent !important; 

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
`;