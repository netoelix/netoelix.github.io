import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Menu from './Header/Menu';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
