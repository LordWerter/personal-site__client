import cwrap from './cwrap';
import title from './title';
import image from './image';
import description from './description';
import descriptionwrapper from './descriptionwrapper';

export interface ICTheme {
    cwrap: typeof cwrap;
    title: typeof title;
    image: typeof image;
    description: typeof description;
    descriptionwrapper: typeof descriptionwrapper;
}

export const CTheme: ICTheme = {
    cwrap,
    title,
    image,
    description,
    descriptionwrapper,
};

export default CTheme;
