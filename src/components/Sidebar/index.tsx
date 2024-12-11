import { Container, Content } from './indexStyle';
//import {House, CodeXml, Parentheses, Cpu, ContactRound, Menu } from 'lucide-react'
import { FaBars } from 'react-icons/fa';
import SidebarItem from '../Sidebar/SidebarItem/index';

interface SidebarProps {
  active: (isActive: boolean) => void; // Função que controla o estado da sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={true}>
      <FaBars onClick={closeSidebar} />
      <Content>
        <SidebarItem Text="Home" Path="/" />
        <SidebarItem Text="Sobre" Path="/sobremim" />
        <SidebarItem  Text="Tecnologias" Path="/tecnologias"/>
        <SidebarItem Text="Projetos" Path="/projetos" />
        <SidebarItem Text="Contate-me" Path="/contato" />
      </Content>
    </Container>
  );
};

export default Sidebar;
