import companyname from './companyname';
import copyright from './copyright';
import cwrap from './cwrap';
import footercolumn from './footercolumn';
import legalinfo from './legalinfo';
import links from './links';
import logox5 from './logox5';
import section from './section';

export interface ICTheme {
    copyright: typeof copyright;
    cwrap: typeof cwrap;
    footercolumn: typeof footercolumn;
    logox5: typeof logox5;
    section: typeof section;
    links: typeof links;
    legalinfo: typeof legalinfo;
    companyname: typeof companyname;
}

export const CTheme: ICTheme = {
    copyright,
    cwrap,
    footercolumn,
    logox5,
    section,
    links,
    legalinfo,
    companyname,
};

export default CTheme;
