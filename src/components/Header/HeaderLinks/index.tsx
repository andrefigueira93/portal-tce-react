import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

interface RouteLink {
  rota: string;
  nome: string;
  children: RouteLink[] | null;
}

const links: RouteLink[] = [
  {
    nome: 'Página Inicial',
    rota: '/',
    children: null,
  },
  {
    nome: 'Institucional',
    rota: '/institucional',
    children: null,
  },
  {
    nome: 'Ministério Público',
    rota: '/ministerio-publico',
    children: null,
  },
  {
    nome: 'Normas e Jurisprudência',
    rota: '/normas-e-jurisprudencia',
    children: null,
  },
  {
    nome: 'Ouvidoria',
    rota: '/ouvidoria',
    children: null,
  },
  {
    nome: 'Serviços',
    rota: '/servicos',
    children: null,
  },
];

const HeaderLinks: React.FC = () => {
  return (
    <>
      <div className="hidden lg:flex flex-wrap">
        {links.map((link) => (
          <Link
            key={link.nome}
            className="ml-4 font-semibold text-gray-600 hover:text-blue-primary transition-colors duration-200"
            to={link.rota}
          >
            {link.nome}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <div className="ml-4 md:ml-0 text-blue-primary">
          <button type="button">
            <FiMenu size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderLinks;
