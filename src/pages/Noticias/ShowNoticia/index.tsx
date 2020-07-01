import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import NoticiaDTO from '../../../dtos/NoticiaDTO';
import api from '../../../services/api';

const ShowNoticia: React.FC = () => {
  const [noticia, setNoticia] = useState<NoticiaDTO>();

  const { slug } = useParams();

  useMemo(() => {
    api.get<NoticiaDTO>(`noticias/${slug}`).then((response) => {
      setNoticia(response.data);
    });
  }, [slug]);

  return (
    <>
      {!noticia && <h4>Carregando...</h4>}
      {noticia && (
        <>
          <div className="bg-blue-primary">
            <div className="container mx-auto py-12">
              <div className="ml-24 max-w-xl">
                <h1 className="text-white font-bold text-3xl">
                  {noticia.titulo}
                </h1>
              </div>
            </div>
          </div>
          <div className="-my-3">
            <div className="container mx-auto">
              <div className="px-4 py-2 bg-gray-200 rounded-md shadow-md text-gray-600">
                <ul className="list-unstyled flex items-center">
                  <li className="font-semibold hover:text-blue-800 transition duration-300">
                    <Link to="/">Início</Link>
                  </li>
                  <li className="mx-2 text-blue-800">
                    <FiArrowRight />
                  </li>
                  <li className="font-semibold hover:text-blue-800 transition duration-300">
                    <Link to="/noticias">Notícias</Link>
                  </li>
                  <li className="mx-2 text-blue-800">
                    <FiArrowRight />
                  </li>
                  <li>{noticia.titulo}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowNoticia;
