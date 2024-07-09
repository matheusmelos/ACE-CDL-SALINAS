import React from 'react';

import { Link } from 'react-router-dom';

import WHATS from '../../images/FALE_ICONS/whatsequipe.png';
import EMAIL from '../../images/EQUIPE_ICONS/mail.png';
import FOTO from '../../images/EQUIPE_ICONS/clara.png';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './equipe.css';



const Clara = () => {
  return (
    <div> <Header /> 

    <div className="equipe">

      <div className="content">
        <img src={FOTO} alt="FOTO" className="fotoperfil" />
        
        <div className="nome">
          <p>
           CLARA MARTINS
          </p>


          <cargo>
          COMUNICAÇÃO & EVENTOS
          </cargo>
       
        </div>

       
        <div className="boxbut">

        <Link to="https://wa.me/message/OV6HLKLXRYBDJ1" className="buttonequipe">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
         WHATSAPP
        </Link>
          <Link to="/clara" className="buttonequipe">
             <img src={EMAIL} alt="Icon 1" className="iconemail" />
            comunicacao@acecdlsalinas.com
          </Link>
        </div>
      </div>
    </div>
       <Footer/>
      </div>

  );
};

export default Clara;