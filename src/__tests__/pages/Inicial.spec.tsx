import React from 'react';
import { render } from '@testing-library/react';
import Inicial from '../../pages/Inicial';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Página Inicial', () => {
  it('deve mostrar o carrosel de notícias', () => {
    const { debug } = render(<Inicial />);

    debug();
  });
});
