import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
