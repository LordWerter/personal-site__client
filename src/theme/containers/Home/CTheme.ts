import cwrap from './cwrap';
import main from './main';

export interface ICTheme {
    cwrap: typeof cwrap;
    main: typeof main;
}

export const CTheme: ICTheme = {
    cwrap,
    main,
};

export default CTheme;
