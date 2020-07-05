import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import logoFull from '../../assets/logo-com-texto.svg';
import { useFontSize } from '../../hooks/fontSize';
import HeaderLinks from './HeaderLinks';
import { useDarkMode } from '../../hooks/darkMode';
import Transition from '../Transition';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuShow, setMobileMenuShow] = useState(true);

  const {
    increaseFontSize,
    decreaseFontSize,
    normalizeFontSize,
  } = useFontSize();

  function handleMobileMenuShow(): void {
    setMobileMenuShow(!mobileMenuShow);
  }

  return (
    <>
      <div className="bg-gray-100 leading-6">
        <div className="container px-4 lg:px-0 md:mx-auto flex flex-wrap py-5 text-sm">
          <div className="flex-grow font-semibold text-gray-500 uppercase">
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
          <div className="text-right self-center space-x-2 flex text-gray-500">
            <button type="button" className="flex" onClick={increaseFontSize}>
              <sup>(1)</sup>A+
            </button>
            <button type="button" className="flex" onClick={normalizeFontSize}>
              <sup>(2)</sup>A
            </button>
            <button type="button" className="flex" onClick={decreaseFontSize}>
              <sup>(3)</sup>A-
            </button>
            <button type="button" className="flex" onClick={toggleDarkMode}>
              <sup>(4)</sup>
              {darkMode === 'on' ? (
                <FiSun className="self-center" />
              ) : (
                <FiMoon className="self-center" />
              )}
              &nbsp;
            </button>
          </div>
        </div>
      </div>
      <div
        className={`transition duration-300 ${
          darkMode === 'on' ? 'bg-black-apoio' : 'bg-white'
        } relative`}
      >
        <div className="flex container lg:mx-auto justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src={logoFull}
                alt="Tribunal de Contas do Estado do Amapá"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={handleMobileMenuShow}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
            <HeaderLinks />
          </div>
        </div>

        <Transition
          show={mobileMenuShow}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg">
              <div
                className={`${
                  darkMode === 'on' ? 'bg-black-apoio' : 'bg-white'
                } rounded-lg shadow-xs divide-y-2 divide-gray-50`}
              >
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={logoFull} alt="TCE-AP" />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={handleMobileMenuShow}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <HeaderLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Header;
