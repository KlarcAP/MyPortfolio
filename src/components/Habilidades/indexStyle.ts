import styled from 'styled-components';

interface ProgressFillProps {
  percentage: number;
}

export const SkillContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  //margin: 0 auto;
  //padding: 20px;
  //font-family: 'Poppins', sans-serif;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SkillHeader = styled.h2`
    display: flex;
    justify-content: center; 
    align-items: center;     
    text-align: center;     

    width: 190px;
    height: 40px;
    border-radius: 5rem;
    background-color: #F1EDFF;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 100;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  //width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SkillColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SkillItemContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  //box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Percentage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
`;

export const SkillName = styled.h3`
  font-size: 18px;
  color: #34495e;
  margin-bottom: 10px;
`;

export const SkillDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

export const ProgressBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;