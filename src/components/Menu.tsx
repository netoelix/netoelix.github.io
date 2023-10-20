import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projetos</NavLink>
      <table>
        <th>
          <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">Linkedin</a>
        </th>
        <th>
          <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">GitHub</a>
        </th>
        <th>
          <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">Instagram</a>
        </th>
        <th>
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
        </th>
      </table>
    </nav>
  );
}
export default Menu;
