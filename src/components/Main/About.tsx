import { useSelector } from 'react-redux';
import { AboutContainer, SectionContainer } from '../../styles/StiledAbout';
import Skills from './Skills';

function About() {
  const nameUser = useSelector((state: any) => state.saveNameReducer.name);
  return (
    <AboutContainer>
      <SectionContainer>
        <article>
          <h2>
            {nameUser.name}
            ,
            {' '}
            um pouco sobre mim.
          </h2>
          <Skills />
          <p>
            Atualmente, sou um desenvolvedor front-end em ascensão,
            resido em Brasília-DF.
            Estou empenhado em realizar uma transição de carreira da área
            de hotelaria para o campo do desenvolvimento,
            ansioso para aplicar de maneira criativa e inovadora os
            conhecimentos que venho adquirindo.
            <br />
            <br />
            Minha paixão pelo aprendizado e disposição para enfrentar
            desafios são motores essenciais nessa jornada de crescimento.
            Estou entusiasmado com a perspectiva de contribuir com
            equipes de desenvolvimento em projetos desafiadores e empolgantes.
            Acredito que a combinação das habilidades adquiridas na hotelaria,
            aliadas às novas competências desenvolvidas na Trybe,
            me tornará um profissional completo e dedicado à excelência.
            <br />
            <br />
            Confio plenamente que essa mudança de carreira me
            conduzirá a um futuro promissor no campo do desenvolvimento web.
            Agradeço pela atenção e pela oportunidade de compartilhar
            um pouco sobre meus objetivos e motivações.
            Estou empolgado com a perspectiva de contribuir
            positivamente para a equipe e para os projetos futuros.
          </p>
        </article>
      </SectionContainer>
    </AboutContainer>
  );
}
export default About;
