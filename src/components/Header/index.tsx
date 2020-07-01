import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import logoFull from '../../assets/logo-com-texto.svg';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="bg-gray-200">
        <div className="container px-4 md:mx-auto flex flex-wrap flex-col md:flex-row py-5 text-sm">
          <div className="md:w-1/2 font-semibold text-gray-600 uppercase">
            <div className="flex flex-wrap items-center">
              <a className="flex-grow" href="tel:+559621014700">
                TEL +55(96) 2101-4700
              </a>
              <Link to="/" className="md:mx-4 flex-grow">
                Acesso a Informação
              </Link>
              <Link to="/" className="flex-grow">
                Transparência
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 text-right">
            <button type="button">A+</button>
            <button type="button" className="mx-4">
              A
            </button>
            <button type="button">A-</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap items-center">
          <div className="w-1/6">
            <img src={logoFull} alt="Logomarca do Tribunal de Contas" />
          </div>
          <Link className="ml-4 font-semibold text-gray-600" to="/">
            Página Inicial
          </Link>
          <Link className="ml-4 font-semibold text-gray-600" to="/noticias">
            Institucional
          </Link>
          <Link className="ml-4 font-semibold text-gray-600" to="/noticias">
            Ministério Público
          </Link>
          <Link className="ml-4 font-semibold text-gray-600" to="/noticias">
            Normas e Jurisprudência
          </Link>
          <Link className="ml-4 font-semibold text-gray-600" to="/noticias">
            Ouvidoria
          </Link>
          <Link className="ml-4 font-semibold text-gray-600" to="/noticias">
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
