import React from 'react';
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logoSimples from '../../assets/logo-simples-sm.svg';

const Footer: React.FC = () => {
  const ano = new Date().getFullYear();
  const idade = ano - 1991;
  return (
    <div className="container mx-auto mt-48">
      <hr />
      <div className="flex flex-wrap pb-4 mt-10 mb-4">
        <div className="w-2/6 mr-4">
          <img src={logoSimples} alt="Logomarca Simples do TCE-AP" />
          <p className="my-4 font-semibold text-gray-600">
            Tribunal de Contas do Estado do Amapá - TCE-AP <br />
            Há {idade} anos realizando fiscalização contábil, financeira,
            orçamentária, operacional e patrimonial do Amapá
          </p>
          <div className="flex flex-wrap">
            <a href="/" target="_blank">
              <FiYoutube
                className="mr-4 text-gray-600 transition duration-200 hover:text-red-700"
                size={28}
              />
            </a>
            <a href="/" target="_blank">
              <FiFacebook
                className="mr-4 text-gray-600 transition duration-200 hover:text-blue-800"
                size={28}
              />
            </a>
            <a href="/" target="_blank">
              <FiTwitter
                className="mr-4 text-gray-600 transition duration-200 hover:text-blue-400"
                size={28}
              />
            </a>
            <a href="/" target="_blank">
              <FiInstagram
                className="mr-4 text-gray-600 transition duration-200 hover:text-indigo-700"
                size={28}
              />
            </a>
          </div>
        </div>
        <div className="flex-grow text-gray-600">
          <ul>
            <li>Competência</li>
            <li>Estrutura Organizacional</li>
          </ul>
        </div>
        <div className="flex-grow text-gray-600">
          <ul>
            <li>Diário Oficial Eletrônico</li>
            <li>Normas e Legislações</li>
          </ul>
        </div>
        <div className="flex-grow text-gray-600">
          <ul>
            <li>Portal da Transparência</li>
            <li>Ouvidoria e-Sic</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="font-semibold text-gray-600 text-center my-4">
        Tribunal de Contas do Estado do Amapá <br />
        1991 - {ano}
      </p>
    </div>
  );
};

export default Footer;
