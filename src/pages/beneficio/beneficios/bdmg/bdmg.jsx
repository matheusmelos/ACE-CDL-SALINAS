//BDMG

import React from 'react';
import { Link } from 'react-router-dom';


import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
import LOGO from '../../../../images/BENEFICIOS_ICONS/BDMG.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './bdmg.css';

const BDMG = () => {
  return (
    <div> <Header /> 
      
    <div className="app">

      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
            TRABALHANDO EXCLUSIVAMENTE COM LINHA DE CRÉDITO PARA MICROEMPRESAS
          </p>
            <ul>
              <li>    TAXAS DIFERENCIADAS: OFERECEMOS TAXAS DE JUROS MENORES QUE A MÉDIA DO MERCADO, ESPECIALMENTE DESENHADAS PARA MICROEMPRESAS.</li>
              <li> LINHA DE CRÉDITO FACILITADA: PROCESSO SIMPLIFICADO E ÁGIL PARA A OBTENÇÃO DE CRÉDITO.</li>
              <li> CONDIÇÕES ESPECIAIS PARA EMPRESAS LIDERADAS POR MULHERES: BENEFÍCIOS E CONDIÇÕES DIFERENCIADAS PARA PROMOVER A EQUIDADE DE GÊNERO NO EMPREENDEDORISMO.</li> 
              <li> CARÊNCIA DE ATÉ 11 MESES: INICIE O PAGAMENTO DO SEU CRÉDITO COM ATÉ 11 MESES DE CARÊNCIA, PROPORCIONANDO MAIOR FÔLEGO FINANCEIRO PARA O SEU NEGÓCIO*. </li>
              <li>SEM NECESSIDADE DE CONTRATAÇÃO DE OUTROS PRODUTOS: NÃO EXIGIMOS A CONTRATAÇÃO DE PRODUTOS ADICIONAIS PARA CONCEDER O CRÉDITO.</li>
            </ul>
          

        </div>

        <div className='contato'>
        <p>
        ENTRE EM CONTATO
        </p>
        </div>
        <div className="bcontainer">
          
        <Link to="/clara" className="but">
          <img src={WHATS} alt="Icon 1" className="Bicon" />
           CLARA MARTINS
        </Link>

        </div>
      </div>
    </div>
    <Footer/>
      </div>

  );
};

export default BDMG;