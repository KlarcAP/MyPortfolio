import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: white;
  padding: 10px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  border-radius: 1rem;
  margin: 0 15px 20px;

  > svg {
    margin: 0 0px;
  }

  a {
    text-decoration: none;
    color: white;
    text-align: center;
    margin: auto;
  }

  &.active {
    color: #f39c12;
  }

  &:hover {
    background-color: black;
  }
`;