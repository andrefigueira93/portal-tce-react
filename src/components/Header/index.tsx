import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import logoFull from '../../assets/logo-com-texto.svg';
import { useAuth } from '../../hooks/auth';
import { useFontSize } from '../../hooks/fontSize';

const Header: React.FC = () => {
  const { user } = useAuth();
  const {
    increaseFontSize,
    decreaseFontSize,
    normalizeFontSize,
  } = useFontSize();

  return (
    <>
      <div className="bg-gray-200">
        <div className="container px-4 md:mx-auto flex flex-wrap py-5 text-sm">
          <div className="w-1/2 font-semibold text-gray-600 uppercase">
            <div className="flex flex-wrap flex-col md:flex-row">
              <a className="" href="tel:+559621014700">
                TEL +55 (96) 2101-4700
              </a>
              <Link to="/" className="md:mx-4">
                Acesso a Informação
              </Link>
              <Link to="/" className="">
                Transparência
              </Link>
            </div>
          </div>
          <div className="w-1/2 text-center md:text-right self-center">
            <button type="button" onClick={increaseFontSize}>
              <sup>(1)</sup>
              <div className="sr-only">Aumentar tamanho da Fonte</div>
              A+
            </button>
            <button type="button" className="mx-4" onClick={normalizeFontSize}>
              <sup>(2)</sup> A
              <div className="sr-only">Normalizar tamanho da Fonte</div>
            </button>
            <button type="button" onClick={decreaseFontSize}>
              <sup>(3)</sup>
              <div className="sr-only">Diminuir tamanho da Fonte</div>
              A-
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap items-center">
          <div className="w-1/6">
            <img src={logoFull} alt="Logomarca do Tribunal de Contas" />
          </div>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/"
          >
            Página Inicial
          </Link>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/noticias"
          >
            Institucional
          </Link>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/noticias"
          >
            Ministério Público
          </Link>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/noticias"
          >
            Normas e Jurisprudência
          </Link>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/noticias"
          >
            Ouvidoria
          </Link>
          <Link
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to="/noticias"
          >
            Serviços
          </Link>
          <input
            className="flex-grow ml-4 border-2 focus:border-blue-900 focus:outline-none rounded-lg px-2 py-1"
            type="search"
            placeholder="Buscar"
          />
          <div className="rounded-full ml-4">
            {!user && <FiLogIn className="text-gray-600" size={24} />}
            {user && <img src={user.avatar_url} alt={user.name} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
