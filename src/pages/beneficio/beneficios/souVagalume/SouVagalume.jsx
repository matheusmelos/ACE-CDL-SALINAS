import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/souvagalume.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './souVagalume.css';



const Sou = () => {
  
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
            PARCERIA COM A COMERC ENERGIA SOLAR. A SOU VAGALUME É UM BENEFÍCIO QUE DISPONIBILIZA, PARA CONTAS DE ENERGIA A PARTIR DE R$180,00, 14% DE ECONOMIA POR MÊS, SEM TAXAS, MENSALIDADES OU INVESTIMENTO ADICIONAL. 


          </p>
         

        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
          <Link to="/contatovagalume" className="but">
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

export default Sou;