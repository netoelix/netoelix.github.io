import { data } from '../../assets/data/data';
import { ProjectsContainer } from '../../styles/StiledProject';

function Projetos() {
  return (
    <ProjectsContainer>
      <div>
        {data.map(({ id, location, images, site }) => {
          return (
            <article key={ id }>
              <h3>{id}</h3>
              <a
                href={ location }
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui para acessar o repositório
              </a>
              <div className="carouselImg">
                <img
                  key={ id }
                  src={ images }
                  alt={ id }
                />
              </div>
              <a
                href={ site }
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui para acessar a página
              </a>
            </article>
          );
        })}
      </div>
    </ProjectsContainer>
  );
}

export default Projetos;
