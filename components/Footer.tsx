"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faArtstation, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brands icons for social links

export default function Footer() {
  return (
    <footer className="absolute bottom-5 text-sm space-x-4">
      {/* Text Links for Larger Screens */}
      <div className="hidden md:inline text-sm">
        <a href="mailto:info@jankejr.cz" className="mx-2">email</a>
        <a href="https://www.linkedin.com/in/jan-kejr" className="mx-2">linkedin</a>
        <a href="https://www.github.com/kejrak" className="mx-2">github</a>
        <a href="https://www.instagram.com/kejrak" className="mx-2">instagram</a>
        <a href="https://www.artstation.com/kejrak" className="mx-2">artstation</a>
        <a href="https://www.behance.net/jankejr" className="mx-2">behance</a>
      </div>

      {/* Icon Links for Smaller Screens */}
      <div className="md:hidden flex space-x-4 text-2xl">
        <a href="mailto:info@jankejr.cz" ><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/jan-kejr" ><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.github.com/kejrak" ><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.instagram.com/kejrak" ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.artstation.com/kejrak" ><FontAwesomeIcon icon={faArtstation} /></a>
        <a href="https://www.behance.net/jankejr" ><FontAwesomeIcon icon={faBehance} /></a>
      </div>
    </footer>
  );
}