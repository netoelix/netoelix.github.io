import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Main/Home';
import NotFound from './components/NotFound';
import Projetos from './components/Main/Projetos';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/projects" element={ <Projetos /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
