import { data } from '../../assets/data/data';
import { ProjectsContainer } from '../../styles/StiledProject';

function Projetos() {
  return (
    <ProjectsContainer>
      <h2>Meus projetos</h2>
      {data.map(({ id, location, images }) => {
        return (
          <article key={ id }>
            <h3>{id}</h3>
            <a href={ location } target="_blank" rel="noreferrer">Repositório</a>
            <div className="carouselImg">
              {images.map((image, index) => (
                <img
                  key={ index }
                  src={ image }
                  alt=""
                />
              ))}
            </div>
            <p>Em construção</p>
          </article>
        );
      })}
    </ProjectsContainer>
  );
}

export default Projetos;
