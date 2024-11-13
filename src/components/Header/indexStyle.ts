import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 80px;
  background-color: #131313;
  border-right: 1px solid white !important;
  color: #ffff;
  position: fixed;
  z-index: 3;

  img{
    cursor: pointer;
    margin: 2rem;
    color: white;
  }

`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: auto;


  span{
    cursor: pointer;
    
    a{
      text-decoration: none;
      color: #ffff;
      
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;

  a {
    font-size: small;
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
