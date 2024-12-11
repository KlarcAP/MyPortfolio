import { Link } from 'react-router-dom';
import { Container } from './indexStyle';

interface SidebarItemProps {
  Text: string;
  Path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({Text, Path }) => {
  return (
    <Container>
      <Link 
        to={Path} 
      >
        {Text}
      </Link>
    </Container>
  );
};

export default SidebarItem;
