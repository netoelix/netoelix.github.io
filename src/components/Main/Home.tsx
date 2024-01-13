import { BsInstagram, BsGithub, BsLinkedin, BsRocket }
  from 'react-icons/bs';
import About from './About';
import { HomeContainer, SectionContainer, ImgContainer } from '../../styles/StiledHome';

function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <ImgContainer>
          <img src="src/assets/imagens/profile.jpg" alt="profile" />
          <section>
            <h2>Elix Merlino Neto</h2>
            <h3>Desenvolvedor Web</h3>
          </section>
        </ImgContainer>
        <nav>
          <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
            <BsRocket />
          </a>
        </nav>
      </SectionContainer>
      <About />
    </HomeContainer>
  );
}

export default Home;
