// Central de Seguros

import React from 'react';

import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/SEGUROS.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './centralSeguros.css';


const PG = () => {
 
  return (
    <div> <Header /> 
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Logo" className="logobee" />
        <div className="text-section">
          <p>
         OPORTUNIDADE PARA AS EMPRESAS E EMPRESÁRIOS CONTRATAREM SEGUROS C0M O CUSTO ACESSÍVEL E ATENDIMENTO PERSONALIZADO.
          </p>

          <p>
ENTRE AS MODALIDASDES DE SEGURO ATENDIDAS ESTÃO:
          </p>
          <ul>
            <li>1.VIDA</li>
            <li>2.VIAGEM</li>
            <li>3.AUTOMÓVEL</li>
            <li>4.RESIDENCIAL</li>
            <li>5.PATRIMONIAL</li>
            <li>6.BENS DE DIVERSAS NATUREZAS</li>
          </ul>

        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>

         
        </div>
        <div className="bcontainer">

        <Link to="/contatoce" className="but">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
          CLIQUE AQUI 
        </Link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

  );
};

export default PG;