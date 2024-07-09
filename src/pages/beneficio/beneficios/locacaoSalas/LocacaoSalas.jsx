import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/SALA.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './locacaoSalas.css';

const LocacaoSalas = () => {
  const navigate = useNavigate();
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
           DISPONIBILDADE DE SALA CLIMATIZADA COM RECURSOS AUDIOVISUAIS (NOTEBOOK, DATASHOW, MICROFINE E SOM) COM CAPACIDADE DE ATE 40 PESSOAS.
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

export default LocacaoSalas;