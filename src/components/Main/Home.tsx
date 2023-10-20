import About from './About';
import Skills from './Skills';

function Home() {
  return (
    <main>
      <div>
        <h2>Elix Merlino Neto</h2>
        <table>
          <th>
            <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">Linkedin</a>
          </th>
          <th>
            <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">GitHub</a>
          </th>
          <th>
            <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">Instagram</a>
          </th>
          <th>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
          </th>
        </table>
        <About />
        <Skills />
      </div>
    </main>
  );
}

export default Home;
