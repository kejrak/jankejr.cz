"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faArtstation, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brands icons for social links

export default function Footer() {
  return (
    <footer className="absolute bottom-5 text-sm space-x-4">
      {/* Text Links for Larger Screens */}
      <div className="hidden md:inline text-sm">
        <a href="mailto:info@jankejr.cz" className="mx-2" target="_blank">email</a>
        <a href="https://www.linkedin.com/in/jankejr" className="mx-2" target="_blank">linkedin</a>
        <a href="https://www.github.com/kejrak" className="mx-2" target="_blank" >github</a>
        <a href="https://www.instagram.com/kejrak" className="mx-2" target="_blank">instagram</a>
        <a href="https://www.artstation.com/kejrak" className="mx-2" target="_blank">artstation</a>
        <a href="https://www.behance.net/kejrak" className="mx-2" target="_blank">behance</a>
      </div>

      {/* Icon Links for Smaller Screens */}
      <div className="md:hidden flex space-x-4 text-2xl">
        <a href="mailto:info@jankejr.cz" target="_blank" ><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/jankejr" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.github.com/kejrak" target="_blank" ><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.instagram.com/kejrak" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.artstation.com/kejrak" target="_blank" ><FontAwesomeIcon icon={faArtstation} /></a>
        <a href="https://www.behance.net/kejrak" target="_blank" ><FontAwesomeIcon icon={faBehance} /></a>
      </div>
    </footer>
  );
}