import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RouteLinkDTO from '../../../../dtos/RouteLinkDTO';
import { useDarkMode } from '../../../../hooks/darkMode';

const HeaderLinkItem: React.FC<RouteLinkDTO> = ({
  nome,
  rota,
  child,
}: RouteLinkDTO) => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();

  if (child !== null) {
    return <h1>Teste</h1>;
  }

  return (
    <Link
      key={nome}
      className={`ml-4 font-semibold transition-colors duration-200 ${
        darkMode === 'on'
          ? 'text-gray-600 hover:text-yellow-primary'
          : 'text-gray-600 hover:text-blue-primary'
      }`}
      to={rota}
    >
      {nome}
    </Link>
  );
};

export default HeaderLinkItem;
