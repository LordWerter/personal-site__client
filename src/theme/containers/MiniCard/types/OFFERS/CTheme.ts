import additionallink from './additionallink';
import cwrap from './cwrap';
import title from './title';
import image from './image';
import oldprice from './oldprice';
import price from './price';
import prices from './prices';
import subscribebtn from './subscribebtn';
import description from './description';
import subdescription from './subdescription';
import promocodeactivationbtn from './promocodeactivationbtn';

export interface ICTheme {
    additionallink: typeof additionallink;
    cwrap: typeof cwrap;
    title: typeof title;
    image: typeof image;
    oldprice: typeof oldprice;
    price: typeof price;
    prices: typeof prices;
    description: typeof description;
    subdescription: typeof subdescription;
    subscribebtn: typeof subscribebtn;
    promocodeactivationbtn: typeof promocodeactivationbtn;
}

export const CTheme: ICTheme = {
    additionallink,
    cwrap,
    title,
    image,
    description,
    subdescription,
    oldprice,
    price,
    prices,
    subscribebtn,
    promocodeactivationbtn,
};

export default CTheme;
