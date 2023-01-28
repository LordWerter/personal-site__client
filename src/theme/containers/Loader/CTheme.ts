import cwrap from './cwrap';
import loadingtext from './loadingtext';
import spinner from './spinner';

export interface ICTheme {
    cwrap: typeof cwrap;
    loadingtext: typeof loadingtext;
    spinner: typeof spinner;
}

export const CTheme: ICTheme = {
    cwrap,
    loadingtext,
    spinner,
};

export default CTheme;
