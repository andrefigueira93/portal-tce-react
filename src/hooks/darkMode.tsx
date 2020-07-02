import React, { createContext, useState, useCallback, useContext } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

interface DarkModeContextData {
  darkMode: string;
  toggleDarkMode(): void;
}

const DarkModeContext = createContext<DarkModeContextData>(
  {} as DarkModeContextData,
);

export const DarkModeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem('@PortalTCE:darkMode');

    if (mode) {
      return mode;
    }

    return 'off';
  });

  const toggleDarkMode = useCallback(() => {
    darkMode === 'off' ? setDarkMode('on') : setDarkMode('off');
    localStorage.setItem('@PortalTCE:darkMode', darkMode);
  }, [darkMode]);

  useHotkeys('alt+4', toggleDarkMode);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export function useDarkMode(): DarkModeContextData {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkMode must be used within an DarkModeProvider');
  }

  return context;
}
