import cwrap from './cwrap';
import title from './title';
import image from './image';
import description from './description';

export interface ICTheme {
    cwrap: typeof cwrap;
    title: typeof title;
    image: typeof image;
    description: typeof description;
}

export const CTheme: ICTheme = {
    cwrap,
    title,
    image,
    description,
};

export default CTheme;
