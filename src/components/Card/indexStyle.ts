import styled from "styled-components";

type Position = "center" | "left" | "right";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
`;

export const Card = styled.div<{ position: Position }>`
  position: absolute;
  width: 400px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  transform: ${({ position }) =>
    position === "center"
      ? "translateX(0) scale(1)"
      : position === "left"
      ? "translateX(-270px) scale(0.9)"
      : "translateX(270px) scale(0.9)"};
  //opacity: ${({ position }) => (position === "center" ? 1 : 0.6)};
  z-index: ${({ position }) => (position === "center" ? 2 : 1)} !important;
  transition: all 0.3s ease;

  img{
    object-fit: contain;
    width: 100%;
    height: 100px;
  }

`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #333;

  &:hover {
    color: black;
  }
`;

export const Links = styled.div`

  display: flex;
  flex-direction: row;
  margin: 1rem;
  align-items: center;
  text-align: center;

  a{
    background-color: purple;
    text-decoration: none;
    color: white;
    width: 100px;
    height: 25px;
    border-radius: 1rem;
  }

`;