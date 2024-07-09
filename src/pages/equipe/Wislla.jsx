import React from 'react';
import { Link } from 'react-router-dom';



import WHATS from '../../images/FALE_ICONS/whatsequipe.png';
import EMAIL from '../../images/EQUIPE_ICONS/mail.png';
import FOTO from '../../images/EQUIPE_ICONS/foto.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './equipe.css';

const Wislla = () => {
  return (
    <div> <Header /> 

    <div className="equipe">

      <div className="content">
        <img src={FOTO} alt="FOTO" className="fotoperfil" />

        <div className="nome">
          <p>
          WISLLA MORAIS
          </p>


          <p>
          SUPERVISÃO & PROJETOS
          </p>

        </div>


        <div className="boxbut">

        <Link to="https://wa.me/message/VBTHCUWWL5HDB1" className="buttonequipe">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
         WHATSAPP
        </Link>
          <Link to="/wislla" className="buttonM">
             <img src={EMAIL} alt="Icon 1" className="iconemail" />
            supervisaoeprojetos@acecdlsalinas.com
          </Link>
        </div>
      </div>
    </div>
       <Footer/>
      </div>

  );
};



export default Wislla;