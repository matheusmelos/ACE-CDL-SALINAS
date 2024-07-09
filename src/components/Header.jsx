import React from 'react';
import './header.css';
import BackButton from './BackButton'; // Certifique-se de que o caminho está correto
import LOGO from '../images/HEADERFOOTER_ICONS/HDLOGO.png';  // Caminho da imagem do logo

const Header = () => {
  return (
    <header className="header">
      <div className="blue-background"></div>
      <div className="green-stripe"></div>
      <img src={LOGO} alt="Logo" className="logoHD" />
     <BackButton />
    </header>
  );
};

export default Header;
