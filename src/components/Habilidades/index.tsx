import React from 'react';
import {
  SkillContainer,
  SkillHeader,
  ColumnsContainer,
  SkillColumn,
  SkillItemContainer,
  Percentage,
  SkillName,
  SkillDescription,
  ProgressBar,
  ProgressFill
} from './indexStyle.ts';

interface SkillItem {
  name: string;
  percentage: number;
  description: string;
}

const SkillChart: React.FC = () => {
  const leftColumnSkills: SkillItem[] = [
    { name: 'Web Design', percentage: 95, description: 'HTML, CSS, jQuery' },
    { name: 'Application Development', percentage: 90, description: 'HTML, CSS, jQuery' },
  ];

  const middleColumnSkills: SkillItem[] = [
    { name: 'Graphic Design', percentage: 85, description: 'Photoshop, Illustrator' },
    { name: 'Analytical Abilities', percentage: 80, description: 'Reporting, Surveying, Teamwork' },
  ];

  const rightColumnSkills: SkillItem[] = [
    { name: 'Web Development', percentage: 70, description: 'HTML, CSS, jQuery' },
    { name: 'Problem Solving', percentage: 65, description: 'Debug, Code Reviews' },
  ];

  return (
    <SkillContainer>
      <SkillHeader>HABILIDADES</SkillHeader>
      
      <ColumnsContainer>
        <SkillColumn>
          {leftColumnSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </SkillColumn>
        
        <SkillColumn>
          {middleColumnSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </SkillColumn>
        
        <SkillColumn>
          {rightColumnSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </SkillColumn>
      </ColumnsContainer>
    </SkillContainer>
  );
};

const SkillItem: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  return (
    <SkillItemContainer>
      <Percentage>{skill.percentage}%</Percentage>
      <ProgressBar>
        <ProgressFill percentage={skill.percentage} />
      </ProgressBar>
      <SkillName>{skill.name}</SkillName>
      <SkillDescription>{skill.description}</SkillDescription>
      
    </SkillItemContainer>
  );
};

export default SkillChart;