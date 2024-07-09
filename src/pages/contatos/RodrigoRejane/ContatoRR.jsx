import React from 'react';

import { Link } from 'react-router-dom';

import WHATS from '../../../images/FALE_ICONS/whatsequipe.png';
import EMAIL from '../../../images/EQUIPE_ICONS/mail.png';
import FOTO from '../../../images/EQUIPE_ICONS/foto.png';
import FOTOREJANE from '../../../images/EQUIPE_ICONS/rejane.png';



import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Contatosou = () => {
  
  return (
    <div> <Header /> 

    <div className="equipe">

      <div className="content">
        <img src={FOTOREJANE} alt="FOTO" className="fotoperfil" />

        <div className="nome">
          <p>
           REJANE TEIXEIRA
          </p>


          <cargo>
          FATURAMENTO ADMINISTRATIVO
          </cargo>

        </div>


        <div className="boxbut">

        <Link to="https://wa.me/message/6RTOTQXFLFYRE1 " className="buttonequipe">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
         WHATSAPP
        </Link>
          <Link to="/contatorr" className="buttonequipe">
             <img src={EMAIL} alt="Icon 1" className="Bicon" />
            faturamento@acecdlsalinas.com
          </Link>
        </div>
      </div>
    </div>
    <div className="equipe">

      <div className="content">
        <img src={FOTO} alt="FOTO" className="fotoperfil" />

        <div className="nome">
          <p>
          RODRIGO NATHAN
          </p>


          <cargo>
          CONTAS A RECEBER
          </cargo>

        </div>


        <div className="boxbut">

        <Link to="https://wa.me/message/VBTHCUWWL5HDB1" className="buttonequipe">
           <img src={WHATS} alt="Icon 1" className="Bicon" />
         WHATSAPP
        </Link>
          <Link to="/contatorr" className="buttonequipe">
             <img src={EMAIL} alt="Icon 1" className="Bicon" />
            contasareceber@acecdlsalinas.com
          </Link>
        </div>
      </div>
    </div>
       <Footer/>
      </div>

  );
};

export default Contatosou;