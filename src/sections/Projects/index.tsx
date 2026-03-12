import { motion } from "framer-motion"; // Importe do framer-motion
import { Container, GridContainer, GridItem, Title } from './indexStyle';
import Beconect from '../../assets/beconnect.png';
import Risoflow from '../../assets/risoflow.png';
import Dtmoney from '../../assets/dtmoney.png';
import Petwalk from '../../assets/petwalk.png';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Intervalo entre as animações dos filhos
      delayChildren: 0.3, // Atraso antes de iniciar
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01]
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: { 
      duration: 0.3 
    }
  }
};

export function SectionProjects() {
  return (
    <Container>
      <Title>PROJETOS</Title>
      
      <GridContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Item 1 (Texto introdutório) */}
        <GridItem
          as={motion.div}
          variants={itemVariants}
          whileHover="hover"
        >
          <p>Aqui você encontra meus trabalhos mais recentes, desde interfaces até sistemas complexos.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore meu trabalho ↓
          </motion.button>
        </GridItem>

        {/* Demais itens (Projetos) */}
        {[Risoflow, Dtmoney, Beconect, Petwalk].map((img, index) => (
          <GridItem
            key={index}
            as={motion.div}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.img 
              src={img} 
              alt={`Projeto ${index + 1}`}
              whileHover={{ scale: 1.03 }}
            />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}