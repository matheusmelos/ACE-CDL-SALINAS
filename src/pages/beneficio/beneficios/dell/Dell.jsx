// DELL

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/DELL.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './dell.css';


const DELL = () => {
  const navigate = useNavigate();
  return (
    <div> <Header /> 
      
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
          OPORTUNIDADE PARA AS EMPRESAS ADQUIRIREM COMPUTADORES E EQUIPAMENTOS COM A MARCA E GARANTIA DELL COM CUPONS EXCLUSIVOS PARA ASSOCIADOS ACE SALINAS.

          </p>
          
          <Link to="http://www.dell.com/pt-br/lp/associacao-FEDERAMINAS" className="but">

             CLIQUE E SAIBA MAIS 
          </Link>
         
          
          <p>
        
        APLIQUE O CÓDIGO DE VERIFICAÇÃO FEDERAMINAS_* E RECEBA POR E-MAIL O CUPOM DE DESCONTO.
          </p>

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

export default DELL;