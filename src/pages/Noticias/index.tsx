import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NoticiaDTO from '../../dtos/NoticiaDTO';
import api from '../../services/api';

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState<NoticiaDTO[]>([]);

  useMemo(() => {
    api.get<NoticiaDTO[]>('/noticias').then((response) => {
      setNoticias(response.data);
    });
  }, []);

  return (
    <>
      <h1>Página Inicial</h1>
      {noticias &&
        noticias.map((noticia) => (
          <Link to={`/noticias/${noticia.slug}`}>
            <p key={noticia.id}>{noticia.titulo}</p>
          </Link>
        ))}
    </>
  );
};

export default Noticias;
