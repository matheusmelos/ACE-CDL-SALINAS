import React from 'react';



import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import './combustivel.css';

  import LOGO from '../../../../images/CONVENIO_LOGOS/combustivel.png';


const Combustivel = () => {

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
export default Combustivel;