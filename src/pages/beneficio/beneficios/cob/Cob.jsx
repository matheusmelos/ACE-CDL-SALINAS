// Cob Online

import React from 'react';
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/COB.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './cob.css';

const Cob = () => {
  
  return (
    <div> <Header /> 
      
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Logo" className="logobee" />
        <div className="text-section">
          <p>
            SERVIÇO DE COBRANÇA EXTRAJUDICIAL VINCULADO AO SPC BRASIL, ATRAVÉS DE NEGOCIADORES PROFISSIONAIS, UTILIZANDO AS MELHORES FERRAMENTAS PARA ENRIQUECIMENTO DE DADOS E LOCALIZAÇÃO
            DO DEVEDOR.


          </p>
          <p>
            ESSE BENEFÍCIO VISA AUXILIAR AS EMPRESAS QUE ESTÃO COM DEVEDORES REGISTRADOS NO SPC BRASIL, NO
            RECEBIMENTO DAS DÍVIDAS DE FORMA PROFISSIONAL E NEUTRA. NESTA OPÇÃO, A EMPRESA REGISTRA O
            CLIENTE DEVEDOR E OS NEGOCIADORES DO COB ONLINE FAZEM O TRABALHO DE COBRANÇA E
            RENEGOCIAÇÃO. 

          </p>
  
        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
        <Link to="/contatorr" className="but">
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

export default Cob;