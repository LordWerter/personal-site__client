import cwrap from './cwrap';
import title from './title';
import description from './description';
import descriptionwrapper from './descriptionwrapper';
import coverbtn from './coverbtn';

export interface ICTheme {
    cwrap: typeof cwrap;
    title: typeof title;
    description: typeof description;
    descriptionwrapper: typeof descriptionwrapper;
    coverbtn: typeof coverbtn;
}

export const CTheme: any = {
    cwrap,
    title,
    description,
    descriptionwrapper,
    coverbtn,
};

export default CTheme;
