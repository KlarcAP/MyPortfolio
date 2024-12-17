import styled from "styled-components";

export const SolarSystemContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  top: -200px;
  left: -300px;
  margin-left: 9rem;
  justify-content: space-evenly;
`;

export const Sun = styled.div`
  position: absolute;
  top: 350px;
  left: 430px;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #ffb400, #ff6f00);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 400px;
  transform-origin: center;
`;

export const TechLogo = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.2);
    filter: brightness(1.5);
  }
`;