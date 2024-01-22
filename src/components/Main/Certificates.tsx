import javascript from '../../assets/certificados/javascript.jpg';
import fundamentos from '../../assets/certificados/modulo-fundamentos.jpg';
import frontEnd from '../../assets/certificados/modulo-front-end.jpg';
import trybeAWS from '../../assets/certificados/TrybeAWS.png';
import { CertificatesContainer } from '../../styles/StyledCertificates';

function Certificates() {
  return (
    <CertificatesContainer>
      <article>
        <h3>Módulo de Front End</h3>
        <div>
          <img
            src={ frontEnd }
            alt="Certificado de conclusão do modulo de Front End"
          />
        </div>
      </article>
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
        <h3>Bootcamp: IA Generativa com AWS</h3>
        <div>
          <img
            src={ trybeAWS }
            alt="Certificado de conculão do Bootcamp: IA Generativa com AWS"
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
    </CertificatesContainer>
  );
}

export default Certificates;
