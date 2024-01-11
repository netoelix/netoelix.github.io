import { BsInstagram, BsGithub, BsLinkedin, BsRocket }
  from 'react-icons/bs';
import About from './About';
import { HomeContainer, SectionContainer } from '../../styles/StiledHome';

function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <h2>Elix Merlino Neto</h2>
        <nav>
          <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">
            Linkedin
            <BsLinkedin />
          </a>
          <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">
            GitHub
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">
            Instagram
            <BsInstagram />
          </a>
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
            Trybe
            <BsRocket />
          </a>
        </nav>
      </SectionContainer>
      <About />
    </HomeContainer>
  );
}

export default Home;
