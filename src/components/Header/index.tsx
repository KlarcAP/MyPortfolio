import { Container, Nav, Btn } from './indexStyle';
import Logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Link, NavLink } from 'react-router-dom';

const NavItem = [
  { name: "Home", link: "/" },
  { name: "Serviços", link: "/servicos" },
  { name: "Sobre", link: "/sobre-mim" },
  { name: "Projetos", link: "/projetos" },
  { name: "Habilidades", link: "/habilidades" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight * 0.5);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <Link to="/">
        <img src={Logo} alt="Logo do site" />
      </Link>
      <Nav>
        {NavItem.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.link} 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.name}
          </NavLink>
        ))}
      </Nav>
      <Link to="/contato">
        <Btn type="button" aria-label="Entre em contato comigo">Contate me</Btn>
      </Link>
    </Container>
  );
};

export default Header;
