import React from 'react';
import { Link } from 'react-router-dom';


import BDMG from '../../images/BENEFICIOS_ICONS/BDMG.png';
import SOUVG from '../../images/BENEFICIOS_ICONS/souvagalume.png';
import EMPREENDER from '../../images/BENEFICIOS_ICONS/EMPREENDER.png';
import SPC from '../../images/BENEFICIOS_ICONS/SPC.png';
import CERTIFICADO from '../../images/BENEFICIOS_ICONS/CERTIFICADO.png';
import DELL from '../../images/BENEFICIOS_ICONS/DELL.png';
import JURIDICO from '../../images/BENEFICIOS_ICONS/JURIDICO.png';
import LINX from '../../images/BENEFICIOS_ICONS/LINX.png';
import COB from '../../images/BENEFICIOS_ICONS/COB.png';
import BEE from '../../images/BENEFICIOS_ICONS/BEE.png';
import PR from '../../images/BENEFICIOS_ICONS/PR.png';
import PG from '../../images/BENEFICIOS_ICONS/PG.png';
import PAPRE from '../../images/BENEFICIOS_ICONS/PAPRE.png';
import SALAS from '../../images/BENEFICIOS_ICONS/SALA.png';
import SEGUROS from '../../images/BENEFICIOS_ICONS/SEGUROS.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './beneficios.css';

const Beneficios = () => {
  const benefits = [
    { name: 'BDMG', path: '/bdmg', icon: BDMG },
    { name: '', path: '/empreender', icon: EMPREENDER },
    { name: '', path: '/souvagalume', icon: SOUVG },
    { name: '', path: '/bee', icon: BEE },
    { name: '', path: '/cob', icon: COB },
    { name: '', path: '/spc', icon: SPC },
    { name: '', path: '/papre', icon: PAPRE },
    { name: '', path: '/dell', icon: DELL },
    { name: '', path: '/linx', icon: LINX },
    { name: 'CERTIFCADO DIGITAL', path: '/certificadoDigital', icon: CERTIFICADO },
    { name: 'PROGRAMA DE ESTÁGIO', path: '/estagio', icon: PG },
    { name: 'PLATAFORMA DE RECRUTAMENTO', path: '/plataformaRecrutamento', icon: PR },
    { name: 'CENTRAL DE SEGUROS', path: '/central', icon: SEGUROS },
    { name: 'CONSULTORIA JURÍDICA', path: '/juridico', icon: JURIDICO},
    { name: 'LOCAÇÃO DE SALAS', path: '/locacao', icon: SALAS },
  ];

  // Função para dividir o array em grupos de tamanho especificado
  const splitArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Dividir o array de beneficios em grupos de 3
  const benefitGroups = splitArray(benefits, 3);

  return (
    <div> <Header />
     
      <div className="benef-container">
        
        <h1 className="titulo">BENEFÍCIOS</h1>
        <h2 className="subtitulo">CLIQUE E ADQUIRA OS MELHORES BENEFÍCIOS PARA SUA EMPRESA!</h2>
        {benefitGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="benef-row">
            {group.map((benefit, index) => (
              <Link to={benefit.path} key={index} className="benef-link">
                <button className={`benef-button ${(groupIndex * 3 + index) % 2 === 0 ? 'blue-border' : 'green-border'}`}>
                  <img src={benefit.icon} alt={benefit.name} className="benef-icon" />
                  {benefit.name}
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

export default Beneficios;
