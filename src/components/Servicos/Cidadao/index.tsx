import React from 'react';
import ServicoDTO from '../../../dtos/ServicoDTO';

// Imagens
import emissaoDeCertidao from '../../../assets/servicos/cidadao/emissao-de-certidao.png';
import diarioOficial from '../../../assets/servicos/cidadao/diario-oficial.png';
import licitacao from '../../../assets/servicos/cidadao/licitacao.png';
import transparencia from '../../../assets/servicos/cidadao/transparencia.png';

// Fachada
import fachada from '../../../assets/fachada.jpg';

import { useDarkMode } from '../../../hooks/darkMode';

const servicosCidadao: ServicoDTO[] = [
  {
    nome: 'Emissão de Certidão',
    icone: emissaoDeCertidao,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    nome: 'Diário Oficial',
    icone: diarioOficial,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    nome: 'Licitações',
    icone: licitacao,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    nome: 'Transparência',
    icone: transparencia,
    descricao:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

const ServicosCidadao: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode === 'on' ? 'bg-gray-600' : 'bg-gray-50'
      } overflow-hidden`}
    >
      {/* <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 sm:py-12 lg:px-8"> */}
      <div className="relative mx-auto sm:pb-12 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h3
            className={`${
              darkMode === 'on' ? 'text-yellow-primary' : 'text-blue-primary'
            } text-3xl sm:mr-56 sm:pl-24 inline-block leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}
          >
            Serviços do Cidadão
          </h3>
        </div>
        <div className="hidden sm:block h-56 bg-blue-primary sm:h-72 md:left-0 md:h-full md:absolute md:w-1/3">
          <img
            className="w-full h-full object-cover"
            src={fachada}
            alt="Entrada do Tribunal de Contas do Estado do Amapá"
          />
        </div>
        {/* <svg
            className="invisible sm:visible absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg> */}
        <div className="relative pb-6 sm:py-6 lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div className="lg:col-span-1" />
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
            {servicosCidadao.map((servico) => (
              <div
                key={servico.nome}
                className={`${
                  darkMode === 'on' ? 'hover:bg-gray-800' : 'hover:bg-white'
                } p-4 rounded-lg hover:shadow-md transition duration-300`}
              >
                <img
                  src={servico.icone}
                  alt={servico.nome}
                  className="rounded-full h-24 w-24 mx-auto sm:mx-0"
                />
                <div className="mt-5 text-center sm:text-left">
                  <h4
                    className={`${
                      darkMode === 'on'
                        ? 'text-yellow-primary'
                        : 'text-blue-primary'
                    } text-lg leading-6 font-medium`}
                  >
                    {servico.nome}
                  </h4>
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
    </div>
  );
};

export default ServicosCidadao;
