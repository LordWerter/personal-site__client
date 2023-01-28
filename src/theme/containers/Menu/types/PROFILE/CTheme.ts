import bankicon from './bankicon';
import button from './button';
import cwrap from './cwrap';
import controlsubbutton from './controlsubbutton';
import controlsubicon from './controlsubicon';
import faqicon from './faqicon';
import logouticon from './logouticon';
import subscriptiondate from './subscriptiondate';
import userdata from './userdata';
import username from './username';

export interface ICTheme {
    cwrap: typeof cwrap;
    userdata: typeof userdata;
    username: typeof username;
    subscriptiondate: typeof subscriptiondate;
    controlsubbutton: typeof controlsubbutton;
    controlsubicon: typeof controlsubicon;
    button: typeof button;
    bankicon: typeof bankicon;
    faqicon: typeof faqicon;
    logouticon: typeof logouticon;
}

export const CTheme: ICTheme = {
    cwrap,
    userdata,
    username,
    subscriptiondate,
    controlsubbutton,
    controlsubicon,
    button,
    bankicon,
    faqicon,
    logouticon,
};

export default CTheme;
