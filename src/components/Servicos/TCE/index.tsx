import React from 'react';
import { useDarkMode } from '../../../hooks/darkMode';
import ServicoDTO from '../../../dtos/ServicoDTO';

// TCE
import bannerIegm from '../../../assets/servicos/tce/banner-iegm.png';
import bannerIgov from '../../../assets/servicos/tce/banner-igov.png';
import bannerlobras from '../../../assets/servicos/tce/banner-lobras.png';
import bannerlreceita from '../../../assets/servicos/tce/banner-lreceita.png';

const servicosTCE: ServicoDTO[] = [
  {
    nome: 'Levantamento de Receitas',
    icone: bannerlreceita,
    descricao:
      'Ferramenta que fiscaliza e demonstra a situação e a evolução da receita própria dos municípios e do estado, possibilitando a identificação dos pontos críticos e das boas práticas executadas, que servem para a seleção das próximas ações de fiscalização voltadas à receita pública.',
  },
  {
    nome: 'Levantamento de Grandes Obras',
    icone: bannerlobras,
    descricao:
      'levantamento de Obras Suspensas e Paralisadas promovido a nível nacional pelo Comitê Interinstitucional de Diagnóstico de Obras Suspensas e Paralisadas, com a finalidade de contribuir com a busca de soluções para a retomada e conclusão dos empreendimentos; ',
  },
  {
    nome: 'Levantamento de Efetividade da Gestão Municipal',
    icone: bannerIegm,
    descricao:
      'O IEGM mede a qualidade dos gastos municipais e avalia as políticas e atividades públicas do gestor municipal. Composto por 7 índices setoriais consolidados em um único índice busca avaliar a efetividade das políticas e atividades públicas desenvolvidas pelos seus gestores.',
  },
  {
    nome: 'Levantamento de Governança e Gestão da Saúde',
    icone: bannerIgov,
    descricao:
      'A governança organizacional pública em saúde compreende essencialmente os mecanismos de liderança, estratégia e controle postos em prática para avaliar, direcionar e monitorar a atuação da direção do Sistema Único de Saúde (SUS).',
  },
];

const ServicosTCE: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`py-1 sm:py-12 ${
        darkMode === 'on' ? 'bg-black-apoio' : 'bg-cool-gray-100'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-5 sm:mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {servicosTCE.map((servico) => (
              <li key={servico.nome} className="py-5 sm:py-0">
                <div className="flex flex-wrap sm:flex-no-wrap">
                  <div className="flex-shrink-0 mx-auto mb-3 sm:mb-0">
                    <img src={servico.icone} alt={servico.nome} />
                  </div>
                  <div className="ml-4">
                    <h4
                      className={`text-lg leading-6 font-medium ${
                        darkMode === 'on'
                          ? 'text-yellow-primary'
                          : 'text-blue-primary'
                      }`}
                    >
                      {servico.nome}
                    </h4>
                    <p className="mt-2 text-base leading-6 text-cool-gray-400">
                      {servico.descricao}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicosTCE;
