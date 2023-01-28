import cwrap from './cwrap';
import CONTROL from './types/CONTROL';
import GENERAL from './types/GENERAL';
import PROFILE from './types/PROFILE';
import PAYMENT_METHODS from './types/PAYMENT_METHODS';

export interface ICTheme {
    GENERAL: typeof GENERAL;
    PROFILE: typeof PROFILE;
    CONTROL: typeof CONTROL;
    PAYMENT_METHODS: typeof PAYMENT_METHODS;

    cwrap: typeof cwrap;
}

export const CTheme: ICTheme = {
    GENERAL,
    PROFILE,
    CONTROL,
    PAYMENT_METHODS,

    cwrap,
};

export default CTheme;
