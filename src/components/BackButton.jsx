import React from 'react';
import { useNavigate } from 'react-router-dom';
import SETA from '../images/BUTTON_ICON/VOLTAR.png';// Substitua pelo caminho correto do seu ícone
import './backButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="backOriginal" onClick={() => navigate(-1)}>
      <img src={SETA} alt="Voltar" className="iconOr" />
      VOLTAR
    </button>
  );
};

export default BackButton;
