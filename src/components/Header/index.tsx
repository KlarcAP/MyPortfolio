import { useState } from 'react';
import  {Container}  from './indexStyle';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;
