import React from 'react';
import { useDarkMode } from '../../hooks/darkMode';

import imagem1 from '../../assets/parceria/image1.png';
import imagem2 from '../../assets/parceria/image2.png';
import imagem3 from '../../assets/parceria/image3.png';
import imagem4 from '../../assets/parceria/image4.png';
import imagem5 from '../../assets/parceria/image5.png';
import imagem6 from '../../assets/parceria/image6.png';
import imagem7 from '../../assets/parceria/image7.png';

interface Parceiro {
  nome: string;
  imagem: string;
  link?: string;
}

const parceiros: Parceiro[] = [
  {
    nome: 'Governo do Amapá',
    imagem: imagem1,
  },
  {
    nome: 'Ministério Público',
    imagem: imagem2,
  },
  {
    nome: 'Assembléia Legislativa',
    imagem: imagem3,
  },
  {
    nome: 'Tribunal de Contas da União',
    imagem: imagem4,
  },
  {
    nome: 'Atricon',
    imagem: imagem5,
  },
  {
    nome: 'TCE-PB',
    imagem: imagem6,
  },
  {
    nome: 'Instituto Rui Barbosa',
    imagem: imagem7,
  },
];

const Parceiros: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="container mx-auto">
      <h2
        className={`text-center ${
          darkMode === 'on' ? 'text-yellow-primary' : 'text-blue-primary'
        } text-3xl font-bold mt-5 mb-2`}
      >
        Parceria
      </h2>
      <div className="flex flex-wrap">
        {parceiros.map(({ nome, imagem }) => (
          <div key={nome} className="w-1/3 sm:flex-1">
            <img src={imagem} alt={nome} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parceiros;
