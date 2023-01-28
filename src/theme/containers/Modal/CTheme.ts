import bgwrap from './bgwrap';
import closebtn from './closebtn';
import header from './header';
import headerimg from './headerimg';
import headpanel from './headpanel';
import title from './title';
import contentareawrap from './contentareawrap';
import contentarea from './contentarea';
import controlbtn from './controlbtn';
import controlspanel from './controlspanel';
import cwrap from './cwrap';
import { logos, features, partners } from '../../images';

export interface ICTheme {
    bgwrap: typeof bgwrap;
    closebtn: typeof closebtn;
    header: typeof header;
    headerimg: typeof headerimg;
    headpanel: typeof headpanel;
    title: typeof title;
    contentareawrap: typeof contentareawrap;
    contentarea: typeof contentarea;
    controlbtn: typeof controlbtn;
    controlspanel: typeof controlspanel;
    cwrap: typeof cwrap;
    images: typeof logos & typeof features & typeof partners;
}

export const CTheme: ICTheme = {
    bgwrap,
    closebtn,
    header,
    headerimg,
    headpanel,
    title,
    contentareawrap,
    contentarea,
    controlbtn,
    controlspanel,
    cwrap,
    images: {
        ...logos,
        ...features,
        ...partners,
    },
};

export default CTheme;
