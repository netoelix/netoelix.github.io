import { NavLink } from 'react-router-dom';
import { HeaderMenu } from '../../styles/StiledHeader';

function Menu() {
  return (
    <HeaderMenu>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/certificates">Certificados</NavLink>
      </nav>
    </HeaderMenu>
  );
}
export default Menu;
