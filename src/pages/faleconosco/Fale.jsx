import React from 'react';

import { Link } from 'react-router-dom';

import WHATSA from '../../images/HOMEPAGE_ICONS/FALE.png';
import WHATSV from '../../images/HOMEPAGE_ICONS/FALE.png';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './fale.css'

const Fale = () => {
  return (
  <div> <Header/> 
    <div className="falepage"> 
      
       <h1 className="titlefale">FALE CONOSCO</h1>
      <div className="buttons-container">
        <Link to="/eduarda" className="buttonFale button-4">
          <img src={WHATSA} alt="Icon 1" className="IconB" />
          COMERCIAL & PRODUTOS
        </Link>
        <Link to="/clara" className="buttonFale button-5">
          <img src={WHATSA} alt="Icon 1" className="IconB" />
          COMUNICAÇÃO & EVENTOS
        </Link>
        <Link to="/rodrigo" className="buttonFale button-6">
           <img src={WHATSA} alt="Icon 1" className="IconB" />
          CONTAS A RECEBER 
        </Link>
        <Link to="/rejane" className="buttonADM button-4">
           <img src={WHATSA} alt="Icon 1" className="IconB" />
          FATURAMENTO ADMNISTRATIVO
        </Link>
        <Link to="/wislla" className="buttonFale button-5">
          <img src={WHATSA} alt="Icon 1" className="IconB" />
          SUPERVISÃO & PROJETOS
        </Link>
        <Link to="/solange" className="buttonFale button-6">
          <img src={WHATSV} alt="Icon 1" className="IconB" />
          GERÊNCIA
        </Link>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Fale;
