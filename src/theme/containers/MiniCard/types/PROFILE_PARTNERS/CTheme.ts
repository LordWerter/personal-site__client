import coverbtn from './coverbtn';
import cwrap from './cwrap';
import title from './title';
import image from './image';
import infobtn from './infobtn';
import description from './description';
import descriptionwrapper from './descriptionwrapper';

export interface ICTheme {
    coverbtn: typeof coverbtn;
    cwrap: typeof cwrap;
    title: typeof title;
    image: typeof image;
    infobtn: typeof infobtn;
    description: typeof description;
    descriptionwrapper: typeof descriptionwrapper;
}

export const CTheme: ICTheme = {
    coverbtn,
    cwrap,
    title,
    image,
    infobtn,
    description,
    descriptionwrapper,
};

export default CTheme;
