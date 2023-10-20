import { BsInstagram, BsGithub, BsLinkedin, BsFillRocketTakeoffFill, BsRocket } from 'react-icons/bs';
import Skills from './Skills';
import About from './About';

function Home() {
  return (
    <main>
      <div>
        <h2>Elix Merlino Neto</h2>
        <table>
          <th>
            <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          </th>
          <th>
            <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer"><BsGithub /></a>
          </th>
          <th>
            <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer"><BsInstagram /></a>
          </th>
          <th>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer"><BsRocket /></a>
          </th>
        </table>
        <About />
        <Skills />
      </div>
    </main>
  );
}

export default Home;
