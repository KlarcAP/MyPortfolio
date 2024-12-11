import styled from 'styled-components';

interface ContainerProps {
  sidebar: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 250px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  animation: ${({ sidebar }) => (sidebar ? "showSidebar .5s" : "hideSidebar .4s" )};
  z-index: 5;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }

  @keyframes hideSidebar {
    from {
      opacity: 1;
      width: 250px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  
`;