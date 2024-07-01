import { BsInstagram, BsGithub, BsLinkedin }
  from 'react-icons/bs';

function SocialMedia() {
  return (
  // All icons were taken from the React Icons library, all rights reserved to the library owner.
    <nav>
      {/* All icons were taken from the React Icons library, all rights reserved to the library owner. */}
      <a href="https://www.linkedin.com/in/elixneto/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/netoelix/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/elixneto/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </nav>
  );
}

export default SocialMedia;
