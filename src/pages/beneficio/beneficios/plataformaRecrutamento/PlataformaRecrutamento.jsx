import React from 'react';
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/PR.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './plataformaRecrutamento.css';


const PlatR = () => {
  
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="BEE Logo" className="logobee" />
        <div className="text-section">
          <p>
            FERRAMENTA QUE AUXILIA O EMPRESÁRIO NA CONTRATAÇÃO E RETENÇÃO DE TALENTOS 

            <p>
              DISPONÍVEL EM DUAS MODALIDADES DE CONTRATAÇÃO:

            </p>

          </p>

          <ul>
            <li>1. DIVULGAÇÃO DA VAGA COM OS PRÉ-REQUISITOS PROPOSTOS PELO EMPRESÁRIO, APLICAÇÃO DE DIAGNÓSTICO ONLINE E ENVIO DO BANCO DE CURRÍCULOS CADASTRADOS PARA A EMPRESA</li>
            <li>2. DIVULGAÇÃO DA VAGA COM OS PRÉ-REQUISITOS PROPOSTOS PELO EMPRESÁRIO, APLICAÇÃO DE DIAGNÓSTICO ONLINE, PRÉ-SELETIVA COM APLICAÇÃO DE DINÂMICA PRESENCIAL E ENVIO DOS 3 MELHORES PERFIS CADASTRADOS PARA E EMPRESA.
</li>
          </ul>
        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
        <Link to="/eduarda" className="but">
          <img src={WHATS} alt="Icon 1" className="Bicon" />
         EDUARDA FERREIRA
        </Link>
        </div>
      </div>
    </div>
      <Footer/>
      </div>

  );
};

export default PlatR;