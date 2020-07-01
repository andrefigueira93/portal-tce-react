import React from 'react';
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logoSimples from '../../assets/logo-simples-sm.svg';

const Footer: React.FC = () => {
  const ano = new Date().getFullYear();
  const idade = ano - 1991;

  return (
    <div className="container px-4 md:px-0 mx-auto mt-48 pb-2">
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
                className="mr-4 text-gray-600 hover:text-red-700 focus:text-red-700 focus:outline-none transition-colors duration-200"
                size={28}
              />
            </a>
            <a
              href="https://www.facebook.com/TCEAP/"
              rel="noreferrer"
              target="_blank"
            >
              <FiFacebook
                className="mr-4 text-gray-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none transition-colors duration-200"
                size={28}
              />
            </a>
            <a href="/" target="_blank">
              <FiTwitter
                className="mr-4 text-gray-600 hover:text-blue-400 focus:text-blue-400 focus:outline-none transition-colors duration-200"
                size={28}
              />
            </a>
            <a
              href="https://www.instagram.com/tceamapa/"
              rel="noreferrer"
              target="_blank"
            >
              <FiInstagram
                className="mr-4 text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none transition-colors duration-200"
                size={28}
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/5 text-gray-600">
          <ul>
            <li>
              <a href="https://tce.ap.gov.br/competencia-do-tce-ap">
                Competência
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/estrutura-organizacional">
                Estrutura Organizacional
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/institucional/calendario">
                Calendário Oficial
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/uploads/controle-externo/CRONOGRAMA%20DE%20REMESSA%20OBRIGATORIA%20DE%20DOCUMENTOS%20PELOS%20%C3%93RG%C3%83OS%20DAS%20ADMINISTRA%C3%87%C3%95ES%20ESTADUAL%20E%20MUNICIPAL%20-%20EXERC%C3%8DCIO%202020%20-%20Alterado%20pela%20DN%20n%C2%BA.%20014-2020.pdf">
                Cronograma de Envio de Remessa
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/uploads/documentos/planejamento_estrategico_2019_2023.pdf">
                Planejamento Estratégico 2019 - 2023
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/area-do-jurisdicionado">
                Área do Jurisdicionado
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 text-gray-600">
          <ul>
            <li>
              <a href="https://tce.ap.gov.br/diario-oficial">
                Diário Oficial Eletrônico
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/normas-e-jurisprudencia/normas-e-legislacoes-do-tce">
                Normas e Legislações
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/normas-e-jurisprudencia/acordaos">
                Acórdãos
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/gerar-certidao">
                Emissão de Certidão Negativa
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/sessoes/pautas">
                Pautas das Sessões
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/sessoes/resultados">
                Resultado das Sessões
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 text-gray-600">
          <ul>
            <li>
              <a href="https://tce.ap.gov.br/portal-da-transparencia">
                Portal da Transparência
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/ouvidoria/acompanhe-sua-solicitacao">
                Acompanhe sua Solicitação
              </a>
            </li>
            <li>
              <a href="https://tce.ap.gov.br/uploads/documentos/Carta%20de%20Servi%C3%A7os%20-%20nova%20vers%C3%A3o%20-%20FINAL.pdf">
                Carta de Serviços ao Cidadão
              </a>
            </li>
            <li>
              <a href="https://www.tce.ap.gov.br/mapa-do-site">Mapa do Site</a>
            </li>
            <li>
              <a href="https://intranet.tce.ap.gov.br">Intranet</a>
            </li>
          </ul>
        </div>
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
  );
};

export default Footer;
