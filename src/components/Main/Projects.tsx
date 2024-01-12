import Carousel from 'react-bootstrap/Carousel';
import { data } from '../../assets/data/data';
import { ProjectsContainer } from '../../styles/StiledProject';
import 'bootstrap/dist/css/bootstrap.css';

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
              <Carousel>
                {images.map((image, index) => (
                  <Carousel.Item key={ index }>
                    <img
                      src={ image }
                      alt=""
                    />
                  </Carousel.Item>))}
              </Carousel>
            </div>
            <p>Em construção</p>
          </article>
        );
      })}
    </ProjectsContainer>
  );
}

export default Projetos;
