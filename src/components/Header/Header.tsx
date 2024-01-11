import { useSelector } from 'react-redux';
import { HeaderContainer } from '../../styles/StiledHeader';

function Header() {
  const nameUser = useSelector((state: any) => state.saveNameReducer.name);

  return (
    <header>
      <HeaderContainer>
        <h1>
          Este é o meu portifólio,
          {' '}
          {nameUser.name}
        </h1>
      </HeaderContainer>
    </header>
  );
}
export default Header;
