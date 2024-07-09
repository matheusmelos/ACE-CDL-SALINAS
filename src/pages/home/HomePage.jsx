import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../../images/HOMEPAGE_ICONS/LOGOS.png';
import icon2 from '../../images/HOMEPAGE_ICONS/BENEFICIO.png';
import icon1 from '../../images/HOMEPAGE_ICONS/CONVENIO.png';
import icon3 from '../../images/HOMEPAGE_ICONS/FALE.png';

import Footer from '../../components/Footer';
import './homePage.css';
 
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="logo">
        <img src={LOGO} alt="Logo 1" className="logo" />
      </div>
      <div className="buttons-container">
        <Link to="/beneficios" className="button button-2">
          <img src={icon2} alt="Icon 2" className="button-icon" />
         BENEFÍCIOS
        </Link>
        <Link to="/convenios" className="button button-1">
          <img src={icon1} alt="Icon 1" className="button-icon" />
          CONVÊNIOS
        </Link>
        
        <Link to="/fale" className="button button-3">
         <img src={icon3} alt="Icon 3" className="button-icon" />
           FALE CONOSCO
        </Link>
        
      </div>
     <Footer/>
    </div>
  );
};

export default HomePage;

