import React from 'react';
import { Link } from 'react-router-dom';


  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/PAPRE.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './papre.css';


const PAPRE = () => {
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
            POSTO AVANÇADO DE CONCILIAÇÃO EXTRA PROCESSUAL

          </p>
          <p>
         OPORTUNIDADE PARA AS EMPRESAS QUE DESEJAM REALIZAR ACORDO DE DÍVIDAS COM SEUS CLIENTES INADIPLENTES, ATRAVÉS DE UM PROCESSO DE CONCILIAÇÃO EXTRA PROCESSUAL PROTOCOLADO PELO TRIBUNAL DE JUSTIÇA DE MINAS GERAIS (TJMG).

          </p>

        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
          <Link to="/wislla" className="but">
            <img src={WHATS} alt="Icon 1" className="Bicon" />
             WISLLA MORAIS
          </Link>
        
      
        </div>
      </div>
    </div>
      <Footer/>
      </div>

  );
};

export default PAPRE;