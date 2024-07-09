import React from 'react';
import './footer.css';
import facebookIcon from '../images/HEADERFOOTER_ICONS/facebookIcon.png'; // caminho do ícone do Facebook
import instagramIcon from '../images/HEADERFOOTER_ICONS//instaIcon.png'; // caminho do ícone do Instagram

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <span className="social-text">ACE/CDL-SALINAS</span>
        </a>
        <a href="https://www.instagram.com/ace.cdl.salinas" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={instagramIcon} alt="Instagram" className="icon" />
          <span className="social-text">@ace.cdl.salinas</span>
        </a>
      </div>
      <div className="author">
        {/* Adicione informações sobre o autor aqui, se necessário */}
      </div>
    </footer>
  );
};

export default Footer;
