import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: transparent;
  border-bottom: 1px solid black !important;
  color: #ffff;
  justify-content: space-between;
  position: fixed;

  img{
    padding: 2rem;
  }

`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  span{
    margin-right: 20px;
    
    
    a{
      text-decoration: none;
      color: #ffff;
    }
  }
`;

export const ButtonContactMe = styled.button`
  background-color: var(--background);
  height: 40px;
  width: 100px;
  border-radius: 2rem;
  margin-right: 2rem;
  cursor: pointer;
  border: none;
  
  &:hover{
    background-color: var(--background-hover);
  }
  
  a{
    color: #ffff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px){
    display: none;
  }

  @media screen and (max-width: 480px){
    width: 100%;
  }
`;
