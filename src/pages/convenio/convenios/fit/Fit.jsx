import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './fit.css';

  
  import LOGO from '../../../../images/CONVENIO_LOGOS/fit.png';

const Fit = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  return (
    <div>
      <Header />
      <div className="img">
        <img src={LOGO} alt="imgt" className="img" />
      </div>
      <h2 className='h2'>CLIQUE E CONFIRA DESCONTOS EXCLUSIVOS PARA ASSOCIADOS!</h2>
      <Footer />
    </div>
  );
};

export default Fit;