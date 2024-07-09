import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/PG.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';



const PG = () => {
  const navigate = useNavigate();
  return (
    <div> <Header /> 
      
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
         OPORTUNIDADE OFERECIDA AS EMPRESAS PARA QUE POSSAM CONTRATAR JOVENS DO ENSINO MÉDIO E SUPERIOR, ATRAVÉS DE PROCESSOS DE CONTRATUAIS TEMPORÁRIOS SEM VINCULO EMPREGATÍCIO COM A FINALIDADE DE INSERI-LOS NO MERCADO DE TRABALHO, DANDO-OS A OPOTUNIDADE DO PRIMEIRO EMPREGO E TAMBÉM  EXPERIÊNCIA NA ÁREA DE FORMAÇÃO PROFISSIONAL.
          </p>
          
          <p>

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

export default PG;