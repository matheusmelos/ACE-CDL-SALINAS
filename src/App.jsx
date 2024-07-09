// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Fale from './pages/faleconosco/Fale';
import HomePage from './pages/home/HomePage'; 
import Convenios from './pages/convenio/Convenios';
import Beneficios from './pages//beneficio/Beneficios';

// EQUIPE 
import Clara from './pages/equipe/Clara';
import Wislla from './pages/equipe/Wislla';
import Rejane from './pages/equipe/Rejane';
import Eduarda from './pages/equipe/Eduarda';
import Rodrigo from './pages/equipe/Rodrigo';
import Solange from './pages/equipe/Solange';


// CONVENIOS
import Fit from './pages/convenio/convenios/fit/Fit';
import Lab from './pages/convenio/convenios/lab/Lab';
import Farma from './pages/convenio/convenios/farma/Farma';
import Saude from './pages/convenio/convenios/saude/Saude';
import Ensino from './pages/convenio/convenios/ensino/Ensino';
import Odonto from './pages/convenio/convenios/odonto/Odonto';
import Comprar from './pages/convenio/convenios/compras/Compras';
import Combustivel from './pages/convenio/convenios/combustivel/Combustivel';


//BENEFICIOS
import Bee from "./pages/beneficio/beneficios/bee/Bee.jsx";
import Cob from './pages/beneficio/beneficios/cob/Cob.jsx';
import SPC from './pages/beneficio/beneficios/spc/SPC.jsx';
import Dell from './pages/beneficio/beneficios/dell/Dell.jsx';
import BDMG from './pages/beneficio/beneficios/bdmg/bdmg.jsx';
import Linx from './pages/beneficio/beneficios/linx/Linx.jsx';
import Papre from './pages/beneficio/beneficios/papre/Papre.jsx';
import Empreender from './pages/beneficio/beneficios/empreender/Empreender.jsx';
import LocacaoSalas from './pages/beneficio/beneficios/locacaoSalas/LocacaoSalas.jsx';
import SouVagalume from './pages/beneficio/beneficios/souVagalume/SouVagalume.jsx';
import CentralSeguros from './pages/beneficio/beneficios/centralSeguros/CentralSeguros.jsx';
import ProgramaEstagio from './pages/beneficio/beneficios/programaEstagio/ProgramaEstagio.jsx';
import Consultoria from './pages/beneficio/beneficios/consultoriaJuridica/Consultoria.jsx';
import CertificadoDigital from './pages/beneficio/beneficios/certificadoDigital/CertificadoDigital.jsx';
import PlataformaRecrutamento from './pages/beneficio/beneficios/plataformaRecrutamento/PlataformaRecrutamento.jsx';



// CONTATOS
import Contatoce from './pages/contatos/ClaraEduarda/ContatoCE.jsx';
import Contatorr from './pages/contatos/RodrigoRejane/ContatoRR.jsx';
import SouVagalumeContato from './pages/contatos/souVagalumeContato/ContatoSouVagalume.jsx';


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/fale" element={<Fale />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/beneficios" element={<Beneficios />} />
       
        <Route path="/fit" element={<Fit />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/farma" element={<Farma />} />
        <Route path="/odonto" element={<Odonto />} />
        <Route path="/ensino" element={<Ensino />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/combustivel" element={<Combustivel />} />
        
        <Route path= "/bee" element={<Bee />} />
        <Route path= "/cob" element={<Cob />} />
        <Route path= "/spc" element={<SPC />} />
        <Route path = "/dell" element={<Dell/>}/>
        <Route path = "/linx" element={<Linx/>}/>
        <Route path = "/bdmg" element={<BDMG/>}/>
        <Route path=  "/papre" element={<Papre/>}/>
        <Route path = "/estagio" element={<ProgramaEstagio/>}/>
        <Route path = "/central" element={<CentralSeguros/>}/>
        <Route path = "/locacao" element={<LocacaoSalas/>}/>
        <Route path = "/juridico" element={<Consultoria/>}/>
        <Route path= "/souvagalume" element={<SouVagalume />} />
        <Route path= "/empreender" element={<Empreender />} />
        <Route path= "/certificadoDigital" element={<CertificadoDigital />} />
        <Route path= "/plataformaRecrutamento" element={<PlataformaRecrutamento />} />
        
        <Route path = "/clara" element={<Clara/>}/>
        <Route path = "/rejane" element={<Rejane/>}/>
        <Route path = "/wislla" element={<Wislla/>}/>
        <Route path = "/rodrigo" element={<Rodrigo/>}/>
        <Route path = "/solange" element={<Solange/>}/>
        <Route path = "/eduarda" element={<Eduarda/>}/>
       
        <Route path = "/contatoce" element={<Contatoce/>}/>
        <Route path = "/contatorr" element={<Contatorr/>}/>
        <Route path = "/contatovagalume" element={<SouVagalumeContato/>}/>
        
      </Routes>
    </div>
  );
};

export default App;
