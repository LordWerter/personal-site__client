import 'react-app-polyfill/stable';

import { StrictMode } from 'react';

import { CoreProvider } from 'src/epics';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
    <StrictMode>
        <CoreProvider />
    </StrictMode>,
);

reportWebVitals();
