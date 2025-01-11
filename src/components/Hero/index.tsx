import { HeroContainer, IntroductionBox, Image, ButtonBox } from "./indexStyle";
import ImagemHero from "../../assets/woman-brown-raincoat-sits-floor-with-laptop_882954-75570-removebg.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import { motion } from "framer-motion";


const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/KlarcAP',
    icon: Github,
  },
  {
    name: "Linkedin",
    url: 'https://www.linkedin.com/in/klarc-almeida-908774162',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/klarc_almeida/',
    icon: Instagram,
  }
];

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hover: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <IntroductionBox>
        <motion.h1 variants={textVariants}>Transformando ideias em experiências digitais impactantes.</motion.h1>
        <motion.h3 variants={textVariants}>Desenvolvedor apaixonado por tecnologia, especialista em criar interfaces intuitivas e soluções inovadoras para a web. Meu foco é unir criatividade e funcionalidade para entregar projetos que realmente fazem a diferença. Explore meu portfólio e conheça o que posso fazer por você!</motion.h3>
        <ButtonBox as={motion.div} variants={buttonVariants}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                type="button"
                className="btn-animated"
                variants={buttonVariants}
                whileHover="hover"
              >
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  style={{ width: "24px", marginRight: "8px" }}
                />
              </motion.button>
            </a>
          ))}
        </ButtonBox>
      </IntroductionBox>
      <Image as={motion.div} variants={imageVariants}>
        <img src={ImagemHero} alt="Foto do Klarc Almeida" />
        
      </Image>
    </HeroContainer>
  );
};
