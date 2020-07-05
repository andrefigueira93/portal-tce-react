import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiFileText } from 'react-icons/fi';
import RouteLinkDTO from '../../../../dtos/RouteLinkDTO';
import { useDarkMode } from '../../../../hooks/darkMode';
import Transition from '../../../Transition';

const HeaderLinkItem: React.FC<RouteLinkDTO> = ({
  nome,
  rota,
  child,
}: RouteLinkDTO) => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();

  function handleOpenState(): void {
    setOpen(!open);
  }

  if (child !== null) {
    return (
      <div className="relative">
        {/* <!-- Item active: "text-gray-900", Item inactive: "text-cool-gray-500" --> */}
        <button
          type="button"
          onClick={handleOpenState}
          className={`${
            darkMode === 'on'
              ? 'hover:text-yellow-primary focus:text-yellow-primary text-cool-gray-500'
              : 'hover:text-blue-primary focus:text-blue-primary text-cool-gray-500'
          } group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none transition ease-in-out duration-150`}
        >
          <span>{nome}</span>
          {/* <!-- Item active: "text-cool-gray-500", Item inactive: "text-gray-400" --> */}
          <FiChevronDown
            className={`${
              open ? 'rotate-180' : ''
            } h-5 w-5 transition ease-in-out duration-150 transform ${
              darkMode === 'on'
                ? 'text-cool-gray-500 group-hover:text-yellow-primary group-focus:text-yellow-primary'
                : 'text-cool-gray-500 group-hover:text-blue-primary group-focus:text-blue-primary'
            }`}
          />
        </button>
        <Transition
          show={open}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="absolute -ml-4 mt-3 w-full sm:w-screen lg:max-w-2xl">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow overflow-hidden">
                <div
                  className={`${
                    darkMode === 'on' ? 'bg-cool-gray-800' : 'bg-white'
                  } z-20 relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2`}
                >
                  {child.map((subItem) => (
                    <Link
                      key={subItem.nome}
                      to={subItem.rota}
                      className={`${
                        darkMode === 'on'
                          ? 'hover:bg-cool-gray-700'
                          : 'hover:bg-gray-200'
                      } -m-3 p-3 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150`}
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-primary text-white sm:h-12 sm:w-12 ">
                        <FiFileText size={24} />
                      </div>
                      <div className="space-y-1">
                        <p
                          className={`${
                            darkMode === 'on'
                              ? 'text-yellow-primary'
                              : 'text-gray-900'
                          } text-base leading-6 font-medium`}
                        >
                          {subItem.nome}
                        </p>
                        <p className="text-sm leading-5 text-cool-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    );
  }

  return (
    <Link
      className={`text-base leading-6 font-medium text-cool-gray-500 hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 ${
        darkMode === 'on'
          ? 'hover:text-yellow-primary focus:text-yellow-primary'
          : 'hover:text-blue-primary focus:text-blue-primary'
      }`}
      to={rota}
    >
      {nome}
    </Link>
  );
};

export default HeaderLinkItem;
