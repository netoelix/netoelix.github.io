import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoGithub }
  from 'react-icons/bi';
import javascript from '../../assets/certificados/javascript.jpg';
import fundamentos from '../../assets/certificados/modulo-fundamentos.jpg';

function Skills() {
  return (
    <>
      <section>
        <h2>Meus certificados</h2>
        <article>
          <h3>Módulo de Fundamentos do Desenvolvimento Web</h3>
          <div>
            <img
              src={ fundamentos }
              alt="Certificado de conclusão do modulo de Fundamentos
               de Desenvolvimento Web"
            />
          </div>
        </article>
        <article>
          <h3>Curso Introdurório de Javascript</h3>
          <div>
            <img
              src={ javascript }
              alt="Certificado de conculão do curso introdutório de Javascript"
            />
          </div>
        </article>
      </section>
      <section>
        <article>
          <h3>Minhas habilidades</h3>
          <BiLogoHtml5 />
          <BiLogoCss3 />
          <BiLogoReact />
          <BiLogoGithub />
          <BiLogoJavascript />
        </article>
      </section>

    </>
  );
}

export default Skills;
