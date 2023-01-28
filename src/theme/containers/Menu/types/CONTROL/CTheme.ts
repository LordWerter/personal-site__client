import button from './button';
import cwrap from './cwrap';
import datablock from './datablock';
import datacontent from './datacontent';
import datasubcontent from './datasubcontent';
import subscriptiondate from './datasubcontent';
import datatitle from './datatitle';
import title from './title';
import userdata from './userdata';

export interface ICTheme {
    cwrap: typeof cwrap;
    userdata: typeof userdata;
    subscriptiondate: typeof subscriptiondate;
    button: typeof button;
    datablock: typeof datablock;
    datacontent: typeof datacontent;
    datasubcontent: typeof datasubcontent;
    datatitle: typeof datatitle;
    title: typeof title;
}

export const CTheme: ICTheme = {
    cwrap,
    userdata,
    subscriptiondate,
    button,
    datablock,
    datacontent,
    datasubcontent,
    datatitle,
    title,
};

export default CTheme;
