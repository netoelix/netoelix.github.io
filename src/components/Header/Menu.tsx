import { NavLink } from 'react-router-dom';
import { LiaCertificateSolid } from 'react-icons/lia';
import { GoProjectSymlink } from 'react-icons/go';
import { CiHome } from 'react-icons/ci';
import { HeaderMenu } from '../../styles/StiledHeader';

function Menu() {
  return (
    <HeaderMenu>
      <nav>
        <NavLink to="/home"><CiHome /></NavLink>
        <NavLink to="/projects"><GoProjectSymlink /></NavLink>
        <NavLink to="/certificates"><LiaCertificateSolid /></NavLink>
      </nav>
    </HeaderMenu>
  );
}
export default Menu;
