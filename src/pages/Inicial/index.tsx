/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import NoticiaDTO from '../../dtos/NoticiaDTO';

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
  const [noticiasToLoad, setNoticiasToLoad] = useState(3);

  useEffect(() => {
    api
      .get(`/noticias-pag/${noticiasToLoad}`)
      .then((response: NoticiasPaginatedResponse) => {
        setNoticias(response.data.data);
      });
  }, [noticiasToLoad]);

  function handleLoadMoreNoticias(): void {
    setNoticiasToLoad(noticiasToLoad + 3);
  }

  return (
    <div className="bg-gray-100 h-screen">
      <h1>Página Inicial</h1>
      <div className="flex flex-wrap">
        {noticias &&
          noticias.map((noticia) => {
            const divStyle = {
              backgroundImage: `url(https://www.tce.ap.gov.br/${noticia.capa})`,
              backgroundSize: 'cover',
            };
            return (
              <Link
                to={`/noticias/${noticia.slug}`}
                key={noticia.id}
                className="w-1/5 mx-auto shadow rounded"
              >
                <div className="h-48" style={divStyle} />
                <div className="px-4 py-4">
                  <h3 className="font-semibold pb-2 hover:text-blue-900 hover:underline transition duration-150">
                    {noticia.titulo}
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: noticia.previa }} />
                </div>
              </Link>
            );
          })}
      </div>
      <button type="button" onClick={handleLoadMoreNoticias}>
        Carregar Mais Notícias
      </button>
    </div>
  );
};

export default Inicial;
