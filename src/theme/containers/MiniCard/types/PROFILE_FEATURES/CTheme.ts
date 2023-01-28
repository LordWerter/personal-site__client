import coverbtn from './coverbtn';
import cwrap from './cwrap';
import description from './description';
import infobtn from './infobtn';
import title from './title';

export interface ICTheme {
    coverbtn: typeof coverbtn;
    cwrap: typeof cwrap;
    description: typeof description;
    infobtn: typeof infobtn;
    title: typeof title;
}

export const CTheme: any = {
    cwrap,
    title,
    description,
    infobtn,
    coverbtn,
};

export default CTheme;
