import styled, { keyframes } from 'styled-components';

// Keyframes para as animações
const autoRun = keyframes`
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
`;

const reversePlay = keyframes`
  from {
    left: calc(var(--width) * -1);
  }
  to {
    left: 100%;
  }
`;

// Componente estilizado
export const StyledSlider = styled.div`
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  position: relative;

  .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }

  .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: ${autoRun} 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1) - 10s) !important;

    img {
      width: 100px;
      height: 150px;
      object-fit: contain;
    }
  }

  &:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  .item:hover {
    filter: grayscale(0);
  }

  &[reverse="true"] .item {
    animation: ${reversePlay} 10s linear infinite;
  }
`;

export const Main = styled.main`
  width: min(1200px, 90vw);
  margin: auto;
`;

export const GlobalStyle = styled.body`
  margin: 0;
  background-color: #e5e5e5;
`;
