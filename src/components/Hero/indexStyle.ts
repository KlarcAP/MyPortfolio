import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  width: 30%;
  background-color: #0f0f0f;
  background-image: url("/background/tech-pattern.svg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Image = styled.div`
  width: 300px;

  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    filter: grayscale(100%);
  }
`;

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10rem;

  @media (max-width: 1024px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  h1:first-of-type {
    color: var(--light-text);
  }

  h1:last-of-type {
    color: var(--text-color);
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-top: 1rem;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 32px;
      height: 32px;
    }
  }

  button:first-of-type{
    background-color: transparent;
    border: 1px solid black;
    color: var(--text-color);
    font-size: 10px;
    border-radius: 2rem;
  }

  button:last-of-type{
    background-color: var(--primary-color);
    color: var(--white);
    font-size: 10px;
    border-radius: 2rem;
  }
`;

export const SocialMedia = styled.div`

  position: absolute;
  width: auto;
  bottom: 10px;       /* Distância do fundo */
  right: 10px;        /* Distância da direita */
  color: var(--text-color);
  padding: 25px 10px;
  text-align: center;
  //justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
  
  a {
    margin-left: 10px;
    
    img {
      width: 24px;
      height: 24px;
      transition: transform 0.2s;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`