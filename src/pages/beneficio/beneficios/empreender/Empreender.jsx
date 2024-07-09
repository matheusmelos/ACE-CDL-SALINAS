import React from 'react';
import { Link } from 'react-router-dom';

  import WHATS from '../../../../images/FALE_ICONS/WHATSV.png';
  import LOGO from '../../../../images/BENEFICIOS_ICONS/EMPREENDER.png';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './empreender.css';

const EMPREENDER = () => {
  return (
    <div> <Header /> 

      <div className="app">
      <div className="content">
        <img src={LOGO} alt="Cob Logo" className="logobee" />
        <div className="text-section">
          <p>
            PROJETO PRESENTE EM MAIS DE 30 MUNICÍPIOS MINEIROS ONDE O PRINCINPAL OBJETIVO É REUNIR EMPRESÁRIOS DO MESMO SEGMENTO FORMANDO NÚCLEOS SETORIAIS VISANDO MELHORAR O DESENVOLVIMENTO E A COMPETITIVIDADE ENTRE AS EMPRESAS PARTICIPANTES.

          </p>
          <p>
         O EMPREENDER É UMA FORMA PRÁTICA DE SE COMUNICAR COM OUTRAS EMPRESAS, ESTRUTURAR AÇÕES E OFERECER BENEFÍCIOS ATRAVÉS DE REUNIÕES E ATIVIDADES JUNTO COM O CONSULTOR DA ACE PARA IDENTIFICAR OS PROBLEMAS EM COMUM DO SEGMENTO, ESTRUTURAR E ANALISAR A MELHOR MANEIRA DE ENFRENTAR OS PRINCIPAIS DESAFIOS E ELABORAR UM PLANO DE AÇÃO EM CONJUNTO PARA SOLUCIONAR TAIS DEMANDAS.

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

export default EMPREENDER;