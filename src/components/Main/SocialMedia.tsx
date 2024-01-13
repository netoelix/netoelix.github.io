import { BsInstagram, BsGithub, BsLinkedin, BsRocket }
  from 'react-icons/bs';

function SocialMedia() {
  return (
    <nav>
      <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
        <BsRocket />
      </a>
    </nav>
  );
}

export default SocialMedia;
