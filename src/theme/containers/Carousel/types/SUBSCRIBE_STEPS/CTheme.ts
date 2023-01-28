import arrowswrap from './arrowswrap';
import cwrap from './cwrap';
import leftarrow from './leftarrow';
import rightarrow from './rightarrow';
import slide from './slide';
import sliderwrap from './sliderwrap';
import track from './track';
import leftline from './leftline';
import rightline from './rightline';

export interface ICTheme {
    arrowswrap: typeof arrowswrap;
    cwrap: typeof cwrap;
    leftarrow: typeof leftarrow;
    rightarrow: typeof rightarrow;
    slide: typeof slide;
    sliderwrap: typeof sliderwrap;
    track: typeof track;
    leftline: typeof leftline;
    rightline: typeof rightline;
}

export const CTheme: ICTheme = {
    arrowswrap,
    cwrap,
    leftarrow,
    rightarrow,
    slide,
    sliderwrap,
    track,
    leftline,
    rightline,
};

export default CTheme;
