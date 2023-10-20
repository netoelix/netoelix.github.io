// import { NavLink } from 'react-router-dom';
import data from '../../assets/data/data.json';

function Projetos() {
  return (
    <section>
      <h2>Meus projetos</h2>
      {data.map(({ id, about, technology, howToUse, resources }) => {
        return (
          <article key={ id }>
            <h3>{id}</h3>
            <p>{about}</p>
            <p>{technology}</p>
            <p>{howToUse}</p>
            <p>{resources}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Projetos;
