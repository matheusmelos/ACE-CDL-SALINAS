// Certificado Digital

import React from 'react'; 
import { Link } from 'react-router-dom';


  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/CERTIFICADO.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './certificadoDigital.css';

const CertDigital = () => {
  
  return (
    <div> <Header /> 
     
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Logo" className="logobee" />
        <div className="text-section">
          <p>

            O CERTIFICADO DIGITAL EMPRESARIAL DO SPC PERMITE QUE EMPRESAS REALIZEM TRANSAÇÕES ELETRÔNICAS DE FORMA SEGURA, AUTENTICANDO DOCUMENTOS E ASSINATURAS DIGITAIS. ELE GARANTE A INTEGRIDADE E A VALIDADE JURÍDICA DAS OPERAÇÕES ONLINE, FACILITANDO PROCESSOS COMO EMISSÃO DE NOTAS FISCAIS E CONTRATOS ELETRÔNICOS.
                     </p>

            <p>
              DISPONÍVEL NAS SEGUINTES MODALIDADES:

            </p>

      

          <ul>
            <li>1. A1 CPF</li>
            <li>2. A1 CNPJ</li>
            <li>3. A3 CPF</li>
            <li>4. A3 CNPJ</li>
          </ul>
        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
        <Link to="/rejane" className="but">
          <img src={WHATS} alt="Icon 1" className="Bicon" />
         REJANE TEIXEIRA
        </Link>
        </div>
      </div>
    </div>
      <Footer/>
      </div>

  );
};

export default CertDigital;