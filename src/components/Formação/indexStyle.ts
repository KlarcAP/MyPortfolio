import styled from 'styled-components';

interface TimelineItemProps {
  index: number;
  middleItem: boolean;
}

interface TimelineBoxProps {
  index: number;
  middleItem: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #f9f9f9;

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: calc(100% - 100px);
    background: var(--primary-color);
    top: 50px;
    left: 50%;
    margin-left: -3px;
    z-index: 1;
  }
`;

export const TimelineItem = styled.div<TimelineItemProps>`
  width: 50%;
  display: flex;
  justify-content: ${props => 
    props.middleItem ? 'flex-end' : 
    props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  padding: 20px 0;
`;

export const TimelineBox = styled.div<TimelineBoxProps>`
  width: calc(50% - 60px);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${props => 
      props.middleItem ? 'left: -40px;' :
      props.index % 2 === 0 ? 'left: -40px;' : 'right: -40px;'}
  }
`;

export const TextBox = styled.div`
  padding: 20px 30px;
  background: white;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin: 0 0 5px 0;
    color: var(--primary-color);
  }
  
  small {
    display: block;
    margin-bottom: 10px;
    color: #666;
  }
  
  p {
    margin: 0;
    line-height: 1.5;
  }
`;