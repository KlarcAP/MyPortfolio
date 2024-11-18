import { Link } from 'react-router-dom'; // Importando o Link
import { HeaderContainer, Nav, Footer } from "./indexStyle";
import menuHamburguer from "../../assets/menu.svg";
import {
  House, 
  UserRoundPen, 
  CodeXml, 
  UserRoundSearch, 
  Instagram, 
  Linkedin, 
  Mail 
} from 'lucide-react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={menuHamburguer} alt="logoPng" />
      <Nav>
        <span><Link to="/"><House /></Link></span> {/* Alterado para <Link> */}
        <span><Link to="/sobremim"><UserRoundPen /></Link></span> {/* Alterado para <Link> */}
        <span><Link to="/projetos"><CodeXml /></Link></span> {/* Alterado para <Link> */}
        <span><Link to="/"><UserRoundSearch /></Link></span> {/* Alterado para <Link> */}
      </Nav>
      <Footer>
        <a href="https://www.instagram.com/klarc_almeida/"><Instagram /></a>
        <a href="https://www.linkedin.com/in/klarc-almeida-908774162"><Linkedin /></a>
        <a href="mailto:klarc@example.com"><Mail /></a>
      </Footer>
    </HeaderContainer>
  );
}
