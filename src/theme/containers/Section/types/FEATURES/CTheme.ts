import cwrap from './cwrap';
import sectioncontent from './sectioncontent';
import characterimgwrap from './characterimgwrap';
import characterimgleft from './characterimgleft';
import characterimgright from './characterimgright';
import title from './title';
import description from './description';

export interface ICTheme {
    cwrap: typeof cwrap;
    sectioncontent: typeof sectioncontent;
    characterimgwrap: typeof characterimgwrap;
    characterimgleft: typeof characterimgleft;
    characterimgright: typeof characterimgright;
    title: typeof title;
    description: typeof description;
}

export const CTheme: ICTheme = {
    cwrap,
    sectioncontent,
    characterimgwrap,
    characterimgleft,
    characterimgright,
    title,
    description,
};

export default CTheme;
