import { HeaderContainer, Nav, Footer } from "./indexStyle";
import Logo from "../../assets/J-removebg-preview.png";
import {
  House, 
  UserRoundPen, 
  CodeXml, 
  UserRoundSearch, 
  Instagram, 
  Linkedin, 
  Mail } from 'lucide-react';

export function Header(){
  return(
    <HeaderContainer>
      <img src={Logo} alt="logoPng"/>
      <Nav>
        <span><a href="/Home"><House/></a></span>
        <span><a href="/sobremim"><UserRoundPen/></a></span>
        <span><a href="/"><CodeXml/></a></span>
        <span><a href="/"><UserRoundSearch/></a></span>
      </Nav>
      <Footer>
        <a href="https://www.instagram.com/klarc_almeida/"><Instagram /></a>
        <a href="https://www.linkedin.com/in/klarc-almeida-908774162"><Linkedin /></a>
        <a href="mailto:klarc@example.com"><Mail /></a>
      </Footer>
    </HeaderContainer>
  )
}