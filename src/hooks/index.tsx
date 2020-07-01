import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { FontSizeProvider } from './fontSize';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <FontSizeProvider>
      <ToastProvider>{children}</ToastProvider>
    </FontSizeProvider>
  </AuthProvider>
);

export default AppProvider;
