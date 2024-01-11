import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Main/Home';
import NotFound from './components/NotFound';
import Projetos from './components/Main/Projetos';
import Login from './components/Login';
import Skills from './components/Main/Skills';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/home" element={ <Home /> } />
          <Route path="/projects" element={ <Projetos /> } />
          <Route path="certificates" element={ <Skills /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
