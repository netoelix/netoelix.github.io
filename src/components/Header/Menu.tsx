import { NavLink } from 'react-router-dom';
import { PiCertificate, PiFolderOpen } from 'react-icons/pi';
import { GoHome } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { HeaderMenu } from '../../styles/StiledHeader';

function Menu() {
  const dispatch = useDispatch();
  return (
    // All icons were taken from the React Icons library, all rights reserved to the library owner.
    <HeaderMenu>
      <nav>
        {/* All icons were taken from the React Icons library, all rights reserved to the library owner. */}
        <NavLink
          onClick={ () => dispatch({ type: 'SAVE_PATH', payload: { path: '/home' } }) }
          to="/home"
        >
          <GoHome />

        </NavLink>
        <NavLink
          onClick={ () => dispatch({
            type: 'SAVE_PATH', payload: { path: '/projects' } }) }
          to="/projects"
        >
          <PiFolderOpen />

        </NavLink>
        <NavLink
          onClick={ () => dispatch({
            type: 'SAVE_PATH', payload: { path: '/certificates' } }) }
          to="/certificates"
        >
          <PiCertificate />

        </NavLink>
      </nav>
    </HeaderMenu>
  );
}
export default Menu;
