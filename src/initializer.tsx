import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

/** CSS Files */
import './index.css';
import client from './config/react-query';

type Props = {
  children: ReactNode;
};

export default function Initializer({ children }: Props) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
