import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: transparent;
  border-bottom: 1px solid white !important;
  color: #ffff;
  justify-content: space-between;
  position: fixed;
  z-index: 3;

  img{
    padding: 2rem;
    width: 150px;
    cursor: pointer;
  }

`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-right: 50px;

  span{
    cursor: pointer;
    
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
