import  {Container, Nav, Btn}  from './indexStyle';
import Logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

const NavItem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Serviços",
    link: "/servicos",
  },
  {
    name: "Sobre",
    link: "/sobre",
  },
  {
    name: "Projetos",
    link: "/projetos",
  },
  {
    name: "Habilidades",
    link: "/habilidades",
  },
];
const Header: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > window.innerHeight * 0.5); //muda após 50% do Hero
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <img src={Logo} alt="Logo" />
      <Nav>
        {NavItem.map ((item) =>(
          <a key={item.name} href={item.link}>{item.name}</a>
        ))}
      </Nav>
      <Btn type="button">Contate me</Btn>
    </Container>
  );
};

export default Header;
