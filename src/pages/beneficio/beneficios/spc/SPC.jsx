import React from 'react'; 
import { Link } from 'react-router-dom';


  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/SPC.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './spc.css';

const spc = () => {
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="BEE Logo" className="logobee" />
        <div className="text-section">
          <p>
            O SPC É UM BIRÔ DE CRÉDITO DISPONÍVEL PARA CONSULTAS E NEGATIVAÇÕES DE CLIENTES, QUE AUXILIA A EMPRESA A CONSTRUIR UM CREDIÁRIO SEGURO. 



          </p>
          <p>
            DISPONÍVEIS CONSULTAS NAS SEGUINTES MODALIDADES:

          </p>
          <ul>
            <li>1. BANCOS</li>
            <li>2. CHEQUES</li>
            <li>3. SERASA</li>
            <li>4. PROTESTOS</li>
            <li>5. CADIN</li>
            <li>6. REGISTRO DE ÓBITO</li>
            <li>7. ENTRE OUTROS</li>
          </ul>
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

export default spc;