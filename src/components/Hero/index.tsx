import { HeroContainer, IntroductionBox, Image, ButtonBox } from "./indexStyle";
import ImagemHero from "../../assets/KlarcProfileHome.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

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

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <IntroductionBox>
        <h2>Hi! I'm, </h2>
        <h1>Klarc Almeida</h1>
        <h2>UX/UI Designer and Front-End Developer👋</h2>
        <ButtonBox>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn-animated">
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  style={{ width: '24px', marginRight: '8px' }}
                />
              </button>
            </a>
          ))}
        </ButtonBox>
      </IntroductionBox>
      <Image>
        <img src={ImagemHero} alt="Foto do Klarc Almeida" />
      </Image>
    </HeroContainer>
  );
};