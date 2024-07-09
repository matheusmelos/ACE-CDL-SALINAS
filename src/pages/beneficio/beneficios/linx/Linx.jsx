import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/LINX.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './linx.css';

const LINX = () => {
  const navigate = useNavigate();
  return (
    <div> <Header /> 
      <button className="back-button" onClick={() => navigate('/beneficios')}>
        <img src={LOGO} alt="Voltar" className="back-icon" />VOLTAR
      </button>
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
         OPORTUNIDADE PARA AS MICRO EMPRESAS ADQUIRIREM UM PROGRAMA DE GESTÃO COMPLETO PARA SUA EMPRESA COM DESCONTO POR SER ASSOCIADO ACE/CDL SALINAS.
          </p>
          <ul>
            <li>1. EMISSAO DE NOTA FISCAL</li>
            <li>2. CONTROLE DE ENTRADA E SAÍDA </li>
            <li>3. CONTROLE DE ESTOQUE (INVENTÁRIO) </li>
            <li>4. ACOMPANHAMENTO DE VENDAS</li>
      
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

export default LINX;