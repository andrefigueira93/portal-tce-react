/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import api from '../../services/api';

import NoticiaDTO from '../../dtos/NoticiaDTO';
import { useDarkMode } from '../../hooks/darkMode';
import ServicosCidadao from '../../components/Servicos/Cidadao';
import ServicosJurisdicionado from '../../components/Servicos/Jurisdicionado';
import ServicosTCE from '../../components/Servicos/TCE';
import Parceiros from '../../components/Parceiros';
import AcompanheNossasSessoes from '../../components/AcompanheNossasSessoes';

interface NoticiasPaginatedResponse {
  data: {
    current_page: number;
    data: NoticiaDTO[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
}

const Inicial: React.FC = () => {
  const [noticias, setNoticias] = useState<NoticiaDTO[]>([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    api.get(`/noticias-pag/4`).then((response: NoticiasPaginatedResponse) => {
      setNoticias(response.data.data);
    });
  }, []);

  return (
    <>
      {noticias[0] && (
        <>
          <div
            className={`${
              darkMode === 'on' ? 'bg-gray-600' : 'bg-blue-primary'
            } h-60 transition duration-200`}
          />
          <div
            className={`relative pt-16 pb-20 px-2 sm:px-6 lg:pt-12 lg:pb-12 lg:px-8 ${
              darkMode === 'on' ? '' : 'bg-gray-50'
            }`}
          >
            <Link to={`/noticias/${noticias[0].slug}`}>
              <div className="container sm:mx-auto h-72 sm:h-96 -mt-64 sm:-mt-48 rounded-lg">
                <div
                  className="h-full relative bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(https://www.tce.ap.gov.br/${noticias[0].capa})`,
                  }}
                >
                  <div
                    className="absolute bottom-0 w-full rounded-b-lg"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
                    }}
                  >
                    <h2 className="px-4 mx-2 antialiased sm:mx-0 text-white py-5 w-full text-xl sm:text-2xl font-semibold">
                      {noticias[0].titulo}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <div className="relative max-w-7xl mx-auto">
              <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                {noticias &&
                  noticias.map(
                    (noticia, index) =>
                      index > 0 && (
                        <Link
                          to={`/noticias/${noticia.slug}`}
                          key={noticia.slug}
                          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="h-48 w-full object-cover"
                              src={`https://www.tce.ap.gov.br/${noticia.capa}`}
                              alt={noticia.titulo}
                            />
                          </div>
                          <div
                            className={`flex-1 p-6 flex flex-col justify-between ${
                              darkMode === 'on' ? 'bg-gray-800' : 'bg-white'
                            }`}
                          >
                            <div className="flex-1">
                              <h3
                                className={`mt-2 text-xl leading-7 font-semibold transition duration-100 hover:underline focus:underline ${
                                  darkMode === 'on'
                                    ? 'text-gray-50 hover:text-yellow-primary focus:text-yellow-primary'
                                    : 'text-gray-900 hover:text-blue-primary focus:text-blue-primary'
                                }`}
                              >
                                {noticia.titulo}
                              </h3>
                              <p
                                className={`mt-3 text-base leading-6 ${
                                  darkMode === 'on'
                                    ? 'text-gray-300'
                                    : 'text-gray-500'
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: noticia.previa,
                                }}
                              />
                            </div>
                            <div className="mt-6 flex items-center">
                              <div
                                className={`flex space-x-2 text-sm leading-5 ${
                                  darkMode === 'on'
                                    ? 'text-gray-200'
                                    : 'text-gray-500'
                                }`}
                              >
                                <FiClock size={18} />
                                <time dateTime={noticia.created_at}>
                                  {noticia.criado}
                                </time>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ),
                  )}
              </div>
              <div className="mt-5 text-center">
                <Link
                  to="/noticias"
                  className="mx-auto inline-flex rounded-md shadow items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium text-blue-primary bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Ver Todas
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <ServicosCidadao />
      <ServicosJurisdicionado />
      <AcompanheNossasSessoes />
      <ServicosTCE />
      <Parceiros />
    </>
  );
};

export default Inicial;
