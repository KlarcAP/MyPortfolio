import React from 'react';
import { motion } from 'framer-motion';
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
} from './indexStyle';

interface SkillItem {
  name: string;
  percentage: number;
  description: string;
}

const SkillChart: React.FC = () => {
  const leftColumnSkills: SkillItem[] = [
    { name: 'Web Design', percentage: 95, description: 'HTML, CSS, jQuery, SASS' },
    { name: 'Application Development', percentage: 90, description: 'HTML, JavaScript, Node.js' },
  ];

  const middleColumnSkills: SkillItem[] = [
    { name: 'Graphic Design', percentage: 85, description: 'Figma, Illustrator' },
    { name: 'Analytical Abilities', percentage: 80, description: 'Reporting, Surveying, Teamwork' },
  ];

  const rightColumnSkills: SkillItem[] = [
    { name: 'Web Development', percentage: 70, description: 'React, Angular' },
    { name: 'Problem Solving', percentage: 65, description: 'Debug, Code Reviews' },
  ];

  // Variantes de animação para os itens de skill
  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <SkillContainer>
      <SkillHeader
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HABILIDADES
      </SkillHeader>
      
      <ColumnsContainer>
        <SkillColumn>
          {leftColumnSkills.map((skill, index) => (
            <SkillItem 
              key={`left-${index}`} 
              skill={skill} 
              variants={skillItemVariants}
              customDelay={index * 0.1}
            />
          ))}
        </SkillColumn>
        
        <SkillColumn>
          {middleColumnSkills.map((skill, index) => (
            <SkillItem 
              key={`middle-${index}`} 
              skill={skill} 
              variants={skillItemVariants}
              customDelay={(index + leftColumnSkills.length) * 0.1}
            />
          ))}
        </SkillColumn>
        
        <SkillColumn>
          {rightColumnSkills.map((skill, index) => (
            <SkillItem 
              key={`right-${index}`} 
              skill={skill} 
              variants={skillItemVariants}
              customDelay={(index + leftColumnSkills.length + middleColumnSkills.length) * 0.1}
            />
          ))}
        </SkillColumn>
      </ColumnsContainer>
    </SkillContainer>
  );
};

interface SkillItemProps {
  skill: SkillItem;
  variants: any;
  customDelay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, variants, customDelay }) => {
  return (
    <SkillItemContainer
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: customDelay }}
    >
      <Percentage>{skill.percentage}%</Percentage>
      <ProgressBar>
        <ProgressFill 
          as={motion.div}
          initial={{ width: 0 }}
          animate={{ width: `${skill.percentage}%` }}
          transition={{
            duration: 1.2,
            delay: 0.3 + customDelay,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          percentage={skill.percentage}
        />
      </ProgressBar>
      <SkillName>{skill.name}</SkillName>
      <SkillDescription>{skill.description}</SkillDescription>
    </SkillItemContainer>
  );
};

export default SkillChart;