import { App, store } from 'epics';
import { Provider } from 'react-redux';
import theme from 'theme';

import { ThemeProvider } from '@emotion/react';

export const CoreProvider: React.FC<any> = (): JSX.Element => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    );
};

export default CoreProvider;
