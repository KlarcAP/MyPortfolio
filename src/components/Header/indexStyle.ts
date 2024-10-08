import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: transparent;
  border-bottom: 1px solid black !important;
  color: #333;
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

    span{
        margin-right: 20px;
        
        a{
            text-decoration: none;
            color: var(--text-title);

        }
    }
`

export const ButtonContactMe = styled.button`
    background-color: var(--background);
    height: 40px;
    width: 100px;
    border-radius: 2rem;
    margin-right: 2rem;
`;
