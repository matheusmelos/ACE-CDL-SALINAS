import React from 'react';




import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './lab.css';

import LOGO from '../../../../images/CONVENIO_LOGOS/lab.png';

const Lab = () => {

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


export default Lab;