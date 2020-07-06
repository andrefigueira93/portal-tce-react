import React from 'react';
import ServicoDTO from '../../../dtos/ServicoDTO';

// Imagens
import buscaDeProcessos from '../../../assets/servicos/jurisdicionado/busca-de-processos.png';
import relatorioDeGestao from '../../../assets/servicos/jurisdicionado/relatorio-de-gestao.png';
import normasELegislacao from '../../../assets/servicos/jurisdicionado/normas-e-legislacao.png';
import { useDarkMode } from '../../../hooks/darkMode';

const servicosJurisdicionado: ServicoDTO[] = [
  {
    nome: 'Relatório de Gestão',
    icone: relatorioDeGestao,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    nome: 'Normas e Legislações',
    icone: normasELegislacao,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    nome: 'Busca de Processos',
    icone: buscaDeProcessos,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

const ServicosJurisdicionado: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${darkMode === 'on' ? 'bg-gray-600' : 'bg-gray-50'} sm:pb-12`}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8 sm:pt-8">
        <div className="lg:col-span-1">
          <h3
            className={`${
              darkMode === 'on' ? 'text-yellow-primary' : 'text-blue-primary'
            } text-3xl text-center mb-4 leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}
          >
            Serviços do Jurisdicionado
          </h3>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 text-center">
          {servicosJurisdicionado.map((servico) => (
            <div
              key={servico.nome}
              className={`${
                darkMode === 'on' ? 'hover:bg-gray-800' : 'hover:bg-white'
              } p-4 rounded-lg hover:shadow-md transition duration-300`}
            >
              <img
                src={servico.icone}
                alt={servico.nome}
                className="rounded-full h-24 w-24 mx-auto"
              />
              <div className="mt-5">
                <h5
                  className={`${
                    darkMode === 'on'
                      ? 'text-yellow-primary'
                      : 'text-blue-primary'
                  } text-lg leading-6 font-medium`}
                >
                  {servico.nome}
                </h5>
                <p
                  className={`${
                    darkMode === 'on' ? 'text-gray-400' : 'text-gray-500'
                  } mt-2 text-base leading-6`}
                >
                  {servico.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicosJurisdicionado;
