import React from 'react';
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
    <nav className="grid gap-4 lg:gap-0 lg:flex md:space-x-3 xl:space-x-5">
      {links.map(({ nome, rota, child }) => (
        <HeaderLinkItem key={nome} rota={rota} nome={nome} child={child} />
      ))}
    </nav>
  );
};

export default HeaderLinks;
