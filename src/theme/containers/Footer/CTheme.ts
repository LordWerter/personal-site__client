import companyname from './companyname';
import copyright from './copyright';
import cwrap from './cwrap';
import footercolumn from './footercolumn';
import legalinfo from './legalinfo';
import links from './links';
import section from './section';

export interface ICTheme {
    copyright: typeof copyright;
    cwrap: typeof cwrap;
    footercolumn: typeof footercolumn;
    section: typeof section;
    links: typeof links;
    legalinfo: typeof legalinfo;
    companyname: typeof companyname;
}

export const CTheme: ICTheme = {
    copyright,
    cwrap,
    footercolumn,
    section,
    links,
    legalinfo,
    companyname,
};

export default CTheme;
