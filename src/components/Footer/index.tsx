import React from 'react';
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logoSimples from '../../assets/logo-simples-sm.svg';
import { useDarkMode } from '../../hooks/darkMode';

interface LinkUtil {
  link: string;
  nome: string;
}

const Footer: React.FC = () => {
  const { darkMode } = useDarkMode();

  const ano = new Date().getFullYear();
  const idade = ano - 1991;

  const socialIconCSS =
    'mr-4 text-gray-600 focus:outline-none transition-colors duration-200';

  const links: Array<LinkUtil[]> = [
    [
      {
        link: 'https://tce.ap.gov.br/competencia-do-tce-ap',
        nome: 'Competência',
      },
      {
        link: 'https://tce.ap.gov.br/estrutura-organizacional',
        nome: 'Estrutura Organizacional',
      },
      {
        link: 'https://tce.ap.gov.br/institucional/calendario',
        nome: 'Calendário Oficial',
      },
      {
        link:
          'https://tce.ap.gov.br/uploads/controle-externo/CRONOGRAMA%20DE%20REMESSA%20OBRIGATORIA%20DE%20DOCUMENTOS%20PELOS%20%C3%93RG%C3%83OS%20DAS%20ADMINISTRA%C3%87%C3%95ES%20ESTADUAL%20E%20MUNICIPAL%20-%20EXERC%C3%8DCIO%202020%20-%20Alterado%20pela%20DN%20n%C2%BA.%20014-2020.pdf',
        nome: 'Cronograma de Envio de Remessa',
      },
      {
        link:
          'https://tce.ap.gov.br/uploads/documentos/planejamento_estrategico_2019_2023.pdf',
        nome: 'Planejamento Estratégico 2019 - 2023',
      },
      {
        link: 'https://tce.ap.gov.br/area-do-jurisdicionado',
        nome: 'Área do Jurisdicionado',
      },
    ],
    [
      {
        link: 'https://tce.ap.gov.br/diario-oficial',
        nome: 'Diário Oficial Eletrônico',
      },
      {
        link:
          'https://tce.ap.gov.br/normas-e-jurisprudencia/normas-e-legislacoes-do-tce',
        nome: 'Normas e Legislações',
      },
      {
        link: 'https://tce.ap.gov.br/normas-e-jurisprudencia/acordaos',
        nome: 'Acórdãos',
      },
      {
        link: 'https://tce.ap.gov.br/gerar-certidao',
        nome: 'Emissão de Certidão Negativa',
      },
      {
        link: 'https://tce.ap.gov.br/sessoes/pautas',
        nome: 'Pautas das Sessões',
      },
      {
        link: 'https://tce.ap.gov.br/sessoes/resultados',
        nome: 'Resultado das Sessões',
      },
    ],
    [
      {
        link: 'https://tce.ap.gov.br/portal-da-transparencia',
        nome: 'Portal da Transparência',
      },
      {
        link: 'https://tce.ap.gov.br/ouvidoria/acompanhe-sua-solicitacao',
        nome: 'Acompanhe sua Solicitação',
      },
      {
        link:
          'https://tce.ap.gov.br/uploads/documentos/Carta%20de%20Servi%C3%A7os%20-%20nova%20vers%C3%A3o%20-%20FINAL.pdf',
        nome: 'Carta de Serviços ao Cidadão',
      },
      {
        link: 'https://www.tce.ap.gov.br/mapa-do-site',
        nome: 'Mapa do Site',
      },
      {
        link: 'https://intranet.tce.ap.gov.br',
        nome: 'Intranet',
      },
    ],
  ];

  return (
    <div
      className={`transition duration-300 ${
        darkMode === 'on' ? 'bg-black-apoio' : ''
      }`}
    >
      <div className="container px-4 md:px-0 mx-auto mt-48 pt-4 pb-2">
        <hr />
        <div className="flex flex-wrap-reverse md:flex-wrap pb-4 mt-5 mb-4 justify-around leading-8">
          <div className="w-full md:w-2/6 mt-4 md:mt-0 md:mr-4">
            <img
              src={logoSimples}
              alt="Logomarca Simples do TCE-AP"
              className="mx-auto md:mx-0"
            />
            <p className="my-4 font-semibold text-gray-600 text-center md:text-left">
              Tribunal de Contas do Estado do Amapá
              <br />
              Há {idade} anos realizando fiscalização contábil, financeira,
              orçamentária, operacional e patrimonial do Amapá
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <a
                href="https://www.youtube.com/channel/UCTysjH6OfRhnonCY76RxbGg"
                rel="noreferrer"
                target="_blank"
              >
                <FiYoutube
                  className={`${socialIconCSS} hover:text-red-700 focus:text-red-700`}
                  size={28}
                />
              </a>
              <a
                href="https://www.facebook.com/TCEAP/"
                rel="noreferrer"
                target="_blank"
              >
                <FiFacebook
                  className={`${socialIconCSS} hover:text-blue-800 focus:text-blue-800`}
                  size={28}
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <FiTwitter
                  className={`${socialIconCSS} hover:text-blue-400 focus:text-blue-400`}
                  size={28}
                />
              </a>
              <a
                href="https://www.instagram.com/tceamapa/"
                rel="noreferrer"
                target="_blank"
              >
                <FiInstagram
                  className={`${socialIconCSS} hover:text-indigo-700 focus:text-indigo-700`}
                  size={28}
                />
              </a>
            </div>
          </div>
          {links &&
            links.map((blocoDeLinks) => (
              <div className="w-full md:w-1/5 text-gray-600">
                <ul>
                  {blocoDeLinks.map((item) => (
                    <li>
                      <a target="_blank" rel="noreferrer" href={item.link}>
                        {item.nome}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <p className="md:hidden uppercase text-gray-600 font-bold">
            Links Úteis
          </p>
        </div>
        <hr />
        <p className="font-semibold text-gray-600 text-center my-4">
          Tribunal de Contas do Estado do Amapá <br />
          1991 - {ano}
        </p>
      </div>
    </div>
  );
};

export default Footer;
