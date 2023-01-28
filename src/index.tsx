/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'react-app-polyfill/stable';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './epics';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
