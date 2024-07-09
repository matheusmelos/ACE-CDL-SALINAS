// Consultoria Juridica

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/JURIDICO.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './consultoria.css';


const Consultoria = () => {
  const navigate = useNavigate();
  return (
    <div> <Header /> 
      
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
           BENEFÍCIO DISPÓNIVEL PARA AS EMPRESAS ASSOCIADAS QUE VISA AUXULIAR OS EMPRESÁRIOS NAS PRINCIPAIS DÚVIDAS DO COTIDIANO PRINCIPALMENTE AO QUE SE REFERE AO CÓDIGO DE DEFESA DO CONSUMIDOR, DIREITO EMPRESARIAL E DIREITO DO TRABALHO.
          </p>
          


        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>


        </div>
        <div className="bcontainer">

        <Link to="/solange" className="but">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
         SOL SANTANA
        </Link>
        </div>
      </div>
    </div>
       <Footer/>
      </div>

  );
};

export default Consultoria;