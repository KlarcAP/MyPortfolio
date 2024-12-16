import  {Container, Nav, Btn}  from './indexStyle';
import Logo from '../../assets/logo.svg';

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

  return (
    <Container>
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
