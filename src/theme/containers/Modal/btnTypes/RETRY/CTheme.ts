import cwrap from './cwrap';

export type TCTheme = {
    cwrap: typeof cwrap;
};

export const CTheme: TCTheme = {
    cwrap,
};

export default CTheme;
