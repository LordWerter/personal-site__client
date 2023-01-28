import cwrap from './cwrap';
import logo from './logo';
import menubtn from './menubtn';
import closebtn from './closebtn';
import section from './section';

export interface ICTheme {
    cwrap: typeof cwrap;
    logo: typeof logo;
    menubtn: typeof menubtn;
    closebtn: typeof closebtn;
    section: typeof section;
}

export const CTheme: ICTheme = {
    cwrap,
    logo,
    menubtn,
    closebtn,
    section,
};

export default CTheme;
