import About from './About';
import { HomeContainer, SectionContainer, ImgContainer } from '../../styles/StiledHome';
import SocialMedia from './SocialMedia';

function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <ImgContainer>
          <img src="src/assets/imagens/profile.jpg" alt="profile" />
          <section>
            <h2>Elix Merlino Neto</h2>
            <h3>Desenvolvedor Web</h3>
            <SocialMedia />
          </section>
        </ImgContainer>
      </SectionContainer>
      <About />
    </HomeContainer>
  );
}

export default Home;
