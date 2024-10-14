import {  ButtonContactMe, HeaderContainer, Nav } from "./indexStyle";

export function Header(){
  return(
    <HeaderContainer>
      <img src="/" alt="logoPng"/>
      <Nav>
        <span><a href="/">Home</a></span>
        <span><a href="/">Sobre</a></span>
        <span><a href="/">Projetos</a></span>
        <span><a href="/">Contato</a></span>
      </Nav>
    </HeaderContainer>
  )
}