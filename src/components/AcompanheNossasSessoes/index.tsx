import React, { useState, useEffect } from 'react';
import { FiDownload, FiMinus } from 'react-icons/fi';
import { useDarkMode } from '../../hooks/darkMode';
import api from '../../services/api';

interface Sessao {
  numero: string;
  dataFormatted: string;
  pauta: string;
  ata: string;
}

const AcompanheNossasSessoes: React.FC = () => {
  const { darkMode } = useDarkMode();

  const [sessoes, setSessoes] = useState<Sessao[]>([]);

  const [tableHeaderTheme, setTableHeaderTheme] = useState('');
  const [tableEvenRowTheme, setTableEvenRowTheme] = useState('');
  const [tableOddRowTheme, setTableOddRowTheme] = useState('');

  useEffect(() => {
    if (darkMode === 'on') {
      setTableHeaderTheme('border-gray-700 bg-gray-800 text-gray-400');
      setTableEvenRowTheme('');
      setTableOddRowTheme('');
    } else {
      setTableHeaderTheme('border-gray-200 bg-gray-50 text-gray-500');
      setTableEvenRowTheme('bg-white');
      setTableOddRowTheme('bg-gray-50');
    }
  }, [darkMode]);

  useEffect(() => {
    api
      .get('https://app.tce.ap.gov.br/api/sessoes')
      .then((response) => setSessoes(response.data));
  }, []);

  const tableHeaderClasses =
    'px-6 py-3 border-b text-left text-xs leading-4 font-medium uppercase tracking-wider';
  const tableLineClasses = 'px-6 py-4 whitespace-no-wrap text-sm leading-5';

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap-reverse sm:flex-wrap">
        <div className="w-full sm:w-1/2 px-4">
          <iframe
            title="Vídeo Institucional do TCE-AP"
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.youtube-nocookie.com/embed/0WvKxWCXY0E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="w-full sm:w-1/2 px-4 pt-4">
          <h3
            className={`${
              darkMode === 'on' ? 'text-yellow-primary' : 'text-blue-primary'
            } text-3xl text-center sm:text-left mb-4 leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}
          >
            Acompanhe nossas Sessões
          </h3>
          <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr className={tableHeaderTheme}>
                      <th className={tableHeaderClasses}>Sessão</th>
                      <th className={tableHeaderClasses}>Data</th>
                      <th className={tableHeaderClasses}>Pauta</th>
                      <th className={tableHeaderClasses}>Ata</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessoes &&
                      sessoes.map(
                        ({ numero, ata, dataFormatted, pauta }, index) => (
                          <tr
                            key={numero}
                            className={
                              index % 2 === 0
                                ? tableEvenRowTheme
                                : tableOddRowTheme
                            }
                          >
                            <td
                              className={`font-medium text-gray-900 ${tableLineClasses}`}
                            >
                              {numero}
                            </td>
                            <td className={`text-gray-500 ${tableLineClasses}`}>
                              {dataFormatted}
                            </td>
                            <td
                              className={`text-blue-apoio ${tableLineClasses}`}
                            >
                              <a
                                href={pauta}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiDownload size={24} />
                              </a>
                            </td>
                            <td className={tableLineClasses}>
                              {ata && (
                                <a
                                  href={ata}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-apoio"
                                >
                                  <FiDownload size={24} />
                                </a>
                              )}
                              {!ata && (
                                <FiMinus className="text-gray-500" size={24} />
                              )}
                            </td>
                          </tr>
                        ),
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button
              type="button"
              className="inline-flex items-center mt-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 transition ease-in-out duration-150"
            >
              Ver Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcompanheNossasSessoes;
