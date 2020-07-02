import React from 'react';
import { FiMenu } from 'react-icons/fi';
import RouteLinkDTO from '../../../dtos/RouteLinkDTO';
import HeaderLinkItem from './HeaderLinkItem';

const links: RouteLinkDTO[] = [
  {
    nome: 'Página Inicial',
    rota: '/',
    child: null,
  },
  {
    nome: 'Institucional',
    rota: '/institucional',
    child: null,
  },
  {
    nome: 'Ministério Público',
    rota: '/ministerio-publico',
    child: null,
  },
  {
    nome: 'Normas e Jurisprudência',
    rota: '/normas-e-jurisprudencia',
    child: null,
  },
  {
    nome: 'Ouvidoria',
    rota: '/ouvidoria',
    child: null,
  },
  {
    nome: 'Serviços',
    rota: '/servicos',
    child: null,
  },
];

const HeaderLinks: React.FC = () => {
  return (
    <>
      <div className="hidden lg:flex flex-wrap">
        {links.map((link) => (
          <HeaderLinkItem
            key={link.nome}
            nome={link.nome}
            rota={link.rota}
            child={link.child}
          />
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
