import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import logoFull from '../../assets/logo-com-texto.svg';
import { useAuth } from '../../hooks/auth';
import { useFontSize } from '../../hooks/fontSize';
import HeaderLinks from './HeaderLinks';

const Header: React.FC = () => {
  const { user } = useAuth();
  const {
    increaseFontSize,
    decreaseFontSize,
    normalizeFontSize,
  } = useFontSize();

  return (
    <>
      <div className="bg-gray-200 leading-6">
        <div className="container px-4 lg:px-0 md:mx-auto flex flex-wrap py-5 text-sm">
          <div className="flex-grow font-semibold text-gray-600 uppercase">
            <div className="flex flex-wrap flex-col md:flex-row">
              <a className="md:w-auto" href="tel:+559621014700">
                TEL +55 (96) 2101-4700
              </a>
              <Link to="/" className="md:mx-4 md:w-auto">
                Acesso a Informação
              </Link>
              <Link to="/" className="md:w-auto">
                Transparência
              </Link>
            </div>
          </div>
          <div className="text-right self-center">
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
      <div className="container mx-auto py-4 md:px-4 xl:px-0">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/5 mb-5 xl:mb-0">
            <img
              src={logoFull}
              alt="Logomarca do Tribunal de Contas"
              className="mx-auto lg:mx-0 max-w-xs md:w-full"
            />
          </div>
          <HeaderLinks />
          <input
            className="flex-grow ml-4 border-2 focus:border-blue-900 focus:outline-none rounded-lg px-2 py-1"
            type="search"
            placeholder="Buscar"
          />
          <div className="rounded-full mx-4 md:mx-0 md:ml-4">
            {!user && <FiLogIn className="text-gray-600" size={24} />}
            {user && <img src={user.avatar_url} alt={user.name} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
