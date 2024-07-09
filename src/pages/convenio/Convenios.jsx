import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SETA from '../../images/BUTTON_ICON/seta.png';
import healthIcon from '../../images/CONVENIO_ICONS/SAUDE.png';
import LabIcon from '../../images/CONVENIO_ICONS/LAB.png';
import odontoIcon from '../../images/CONVENIO_ICONS/ODONTO.png';
import fitIcon from '../../images/CONVENIO_ICONS/FIT.png';
import farmaIcon from '../../images/CONVENIO_ICONS/FARMA.png';
import ensinoIcon from '../../images/CONVENIO_ICONS/ENSINO.png';
import comprarIcon from '../../images/CONVENIO_ICONS/COMPRAS.png';
import combustivelIcon from '../../images/CONVENIO_ICONS/COMBUSTIVEL.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './convenios.css';

const Convenios = () => {
  const navigate = useNavigate();
  const convenios = [
    { name: 'ACE CDL SAÚDE', path: '/saude', icon: healthIcon },
    { name: 'ACE CDL LAB', path: '/lab', icon: LabIcon },
    { name: 'ACE CDL ODONTO', path: '/odonto', icon: odontoIcon },
    { name: 'ACE CDL FIT', path: '/fit', icon: fitIcon },
    { name: 'ACE CDL FARMA', path: '/farma', icon: farmaIcon },
    { name: 'ACE CDL ENSINO', path: '/ensino', icon: ensinoIcon },
    { name: 'ACE CDL COMBUSTIVEL', path: '/combustivel', icon: combustivelIcon },
    { name: 'ACE CDL COMPRAS', path: '/comprar', icon: comprarIcon },
 
  ];

  // Função para dividir o array em grupos de tamanho especificado
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Dividir o array de convenios em grupos de 2
  const conveniosGrupos = chunkArray(convenios, 2);

  const colorSequence = ['blue', 'green', 'green', 'blue', 'blue', 'green', 'green', 'blue'];

  return (
    <div> <Header />
    <div className="convenios-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <img src={SETA} alt="Voltar" className="back-icon" />VOLTAR
      </button>
      <h1 className="titulo">CONVÊNIOS</h1>
      <h2 className="subtitulo">CLIQUE E CONFIRA DESCONTOS EXCLUSIVOS PARA ASSOCIADOS!</h2>
      {conveniosGrupos.map((grupo, grupoIndex) => (
        <div key={grupoIndex} className="convenios-row">
          {grupo.map((convenio, index) => (
            <Link to={convenio.path} key={index} className="convenio-link">
              <button className={`convenio-button ${colorSequence[(grupoIndex * 2 + index) % colorSequence.length]}`}>
                <img src={convenio.icon} alt={convenio.name} className="convenio-icon" />
                {convenio.name}
              </button>
            </Link>
          ))}
        </div>
      ))}
    </div>
    <Footer/>
      </div>
  );
};

export default Convenios;
