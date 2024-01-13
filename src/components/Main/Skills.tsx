import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoJavascript,
  BiLogoGithub, BiLogoTypescript, BiLogoRedux }
  from 'react-icons/bi';
import { SkillContainer } from '../../styles/StiledAbout';

function Skills() {
  // All icons were taken from the React Icons library, all rights reserved to the library owner.
  return (
    <SkillContainer>
      {/* All icons were taken from the React Icons library, all rights reserved to the library owner. */}
      <h3>Hard Skills</h3>
      <section>
        <span className="HTML">
          HTML
          {' '}
          <BiLogoHtml5 />
        </span>
        <span className="CSS">
          CSS
          {' '}
          <BiLogoCss3 />
        </span>
        <span className="Javascript">
          Javascript
          {' '}
          <BiLogoJavascript />
        </span>
        <span className="Typescript">
          Typescript
          {' '}
          <BiLogoTypescript />
        </span>
        <span className="React">
          React
          {' '}
          <BiLogoReact />
        </span>
        <span className="Redux">
          Redux
          {' '}
          <BiLogoRedux />
        </span>
        <span className="Github">
          Github
          {' '}
          <BiLogoGithub />
        </span>
      </section>
    </SkillContainer>
  );
}

export default Skills;
