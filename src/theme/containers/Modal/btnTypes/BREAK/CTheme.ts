import cwrap from './cwrap';

export type TCTheme = {
    cwrap: typeof cwrap;
};

export const ACTION: TCTheme = {
    cwrap,
};

export default ACTION;
