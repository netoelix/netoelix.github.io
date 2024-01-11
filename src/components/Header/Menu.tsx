import { NavLink } from 'react-router-dom';
import { PiCertificate, PiFolderOpen } from 'react-icons/pi';
import { GoHome } from 'react-icons/go';
import { HeaderMenu } from '../../styles/StiledHeader';

function Menu() {
  return (
    <HeaderMenu>
      <nav>
        <NavLink to="/home"><GoHome /></NavLink>
        <NavLink to="/projects"><PiFolderOpen /></NavLink>
        <NavLink to="/certificates"><PiCertificate /></NavLink>
      </nav>
    </HeaderMenu>
  );
}
export default Menu;
