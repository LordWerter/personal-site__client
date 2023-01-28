import cwrap from './cwrap';
import signinbutton from './signinbutton';

export interface ICTheme {
    cwrap: typeof cwrap;
    signinbutton: typeof signinbutton;
}

export const CTheme: ICTheme = {
    cwrap,
    signinbutton,
};

export default CTheme;
