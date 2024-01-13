import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Home from './components/Main/Home';
import NotFound from './components/NotFound';
import Projetos from './components/Main/Projects';
import Login from './components/Login';
import Certificates from './components/Main/Certificates';
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
          <Route path="certificates" element={ <Certificates /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
      <SpeedInsights />
    </>
  );
}

export default App;
