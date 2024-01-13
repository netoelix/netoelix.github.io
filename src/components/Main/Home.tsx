import About from './About';
import { HomeContainer, SectionContainer, ImgContainer } from '../../styles/StiledHome';
import SocialMedia from './SocialMedia';
import profilePicture from '../../assets/imagens/profile.jpg';

function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <ImgContainer>
          <img src={ profilePicture } alt="profile" />
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
