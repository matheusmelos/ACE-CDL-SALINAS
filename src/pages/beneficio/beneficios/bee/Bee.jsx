// BEE

import React from 'react';
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/BEE.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './bee.css';

const Bee = () => {
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="BEE Logo" className="logobee" />
        <div className="text-section">
          <p>
            É UM CARTÃO DE BENEFÍCIOS BANDEIRADO MASTERCARD, TOTALMENTE SEGURO E SEM CUSTO, ACEITO EM QUALQUER LUGAR DO MUNDO!


          </p>
          <p>
            AS EMPRESAS ASSOCIADAS PODEM DISPONIBILIZAR AOS SEUS COLABORARES PARA FINS DE PAGAMENTOS DE BENEFÍCIOS E OU OBRIGAÇÕES LEGAIS, COMO POR EXEMPLO:
          
          </p>
          <ul>
            <li>1. PREMIAÇÕES</li>
            <li>2. VALE REFEIÇÃO</li>
            <li>3. VALE ALIMENTAÇÃO</li>
            <li>4. VALE COMBUSTÍVEL</li>
            <li>5. VALE CRECHE</li>
            <li>6. VALE ENSINO</li>
            <li>7. ENTRE OUTROS</li>
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

export default Bee;
