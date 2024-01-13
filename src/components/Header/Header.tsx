import { useSelector } from 'react-redux';
import { HeaderContainer } from '../../styles/StiledHeader';
import Menu from './Menu';

function Header() {
  const nameUser = useSelector((state: any) => state.saveNameReducer.name);
  const pathActual = useSelector((state: any) => state.savePathReducer.path);

  function whatPath() {
    if (pathActual.path === '/home') {
      return (
        <h1>
          {nameUser.name}
          ,
          {' '}
          este é o meu portifólio.
        </h1>
      );
    }
    if (pathActual.path === '/projects') {
      return (
        <h1>
          {nameUser.name}
          ,
          {' '}
          este são os meus projetos.
        </h1>
      );
    }
    if (pathActual.path === '/certificates') {
      return (
        <h1>
          {nameUser.name}
          ,
          {' '}
          este são os meus certificados.
        </h1>
      );
    }
    return (
      <h1>
        {nameUser.name}
        ,
        {' '}
        este é o meu portifólio.
      </h1>
    );
  }

  const message = whatPath();

  return (
    <header>
      <HeaderContainer>
        {message}
        <Menu />
      </HeaderContainer>
    </header>
  );
}

export default Header;
