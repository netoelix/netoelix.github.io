import { data } from '../../assets/data/data';
import { ProjectsContainer } from '../../styles/StiledProject';

function Projetos() {
  return (
    <ProjectsContainer>
      <h2>Meus projetos</h2>
      {data.map(({ id, location }) => {
        return (
          <article key={ id }>
            <h3>{id}</h3>
            <a href={ location }>Repositório</a>
            <p>Em construção</p>
          </article>
        );
      })}
    </ProjectsContainer>
  );
}

export default Projetos;
