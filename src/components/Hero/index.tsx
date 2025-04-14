import {
  HeroContainer,
  IntroductionBox,
  Image,
  ButtonBox,
  LeftSide,
  RightSide,
  SocialMedia,
} from "./indexStyle";
import ImagemHero from "../../assets/minhaFoto.jpeg";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/KlarcAP",
    icon: Github,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/klarc-almeida-908774162",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/klarc_almeida/",
    icon: Instagram,
  },
];
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

export const HeroSection: React.FC = () => {
  const handleDownload = () => {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = '/curriculo.pdf'; // Caminho do seu PDF na pasta public
    link.download = 'Klarc-Almeida-Curriculo.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/projetos'; // Caminho do seu PDF na pasta public
    //link.download = 'Klarc-Almeida-Curriculo.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <LeftSide>
        <Image as={motion.div} variants={imageVariants}>
          <img
            src={ImagemHero}
            alt="Foto do Klarc Almeida"
            style={{
              height: 'auto',
              width: '400px',
              maxWidth: '600px',
              maskImage: 'url(/triangle-mask.svg)',
              WebkitMaskImage: 'url(/triangle-mask.svg)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </Image>
      </LeftSide>

      <RightSide>
        <IntroductionBox>
          <motion.h1 variants={textVariants}>Olá, Eu sou Klarc</motion.h1>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>

          <ButtonBox as={motion.div} variants={textVariants}>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                >
                  DOWNLOAD CV
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewPortfolio}
                >
                  VER PORTFÓLIO
                </motion.button>
          </ButtonBox>
        </IntroductionBox>
        <SocialMedia>
          FOLLOW ME ON : 
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <img 
                src={link.icon} 
                alt={link.name} 
                style={{ width: "24px", height: "24px", marginLeft: "10px" }} 
              />
            </a>
          ))}
        </SocialMedia>
      </RightSide>
    </HeroContainer>
  );
};
