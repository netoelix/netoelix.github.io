import { useSelector } from 'react-redux';
import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoGithub }
  from 'react-icons/bi';
import { AboutContainer, SectionContainer } from '../../styles/StiledAbout';

function About() {
  const nameUser = useSelector((state: any) => state.saveNameReducer.name);
  return (
    <AboutContainer>
      <SectionContainer>
        <article>
          <h2>
            Um pouco sobre mim,
            {' '}
            {nameUser.name}
          </h2>
          <p>
            Sou estudante na Trybe, cursando desenvolvimento web full-stack,
            e atualmente resido no entorno de Brasília-DF.
            Meu objetivo é realizar uma transição de carreira da área de
            hotelaria para o campo do desenvolvimento.
            <br />
            <br />
            Estou muito animado com a oportunidade de expandir meus conhecimentos
            na área de desenvolvimento web e aplicá-los de forma criativa e inovadora.
            Tenho grande paixão por aprender e estou disposto a enfrentar os desafios
            que essa trajetória possa me proporcionar.
            <br />
            <br />
            Estou ansioso para contribuir com as equipes de desenvolvimento em
            projetos desafiadores e empolgantes.
            <br />
            <br />
            Acredito que a combinação de minhas habilidades adquiridas na hotelaria,
            juntamente com as novas habilidades que venho desenvolvendo na Trybe,
            me tornará um profissional completo e comprometido com a excelência.
            <br />
            <br />
            Estou confiante de que essa mudança de carreira me levará a um futuro
            promissor no campo do desenvolvimento web. Grato pela atenção e pela
            oportunidade de compartilhar um pouco sobre meus objetivos e motivações.
            <br />
            <br />
            Estou entusiasmado com a perspectiva de contribuir positivamente para
            a equipe e para os projetos futuros.
          </p>
        </article>
      </SectionContainer>
      <SectionContainer>
        <article>
          <h2>Minhas habilidades</h2>
          <div>
            <BiLogoHtml5 />
            <BiLogoCss3 />
            <BiLogoJavascript />
            <BiLogoReact />
            <BiLogoGithub />
          </div>
        </article>
      </SectionContainer>
    </AboutContainer>
  );
}
export default About;
