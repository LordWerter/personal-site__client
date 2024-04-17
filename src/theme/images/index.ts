import backgrounds from './backgrounds';
import logos from './logos';
import loader from './loader';
import icons from './icons';

export type TAllImages = typeof backgrounds &
    typeof logos &
    typeof loader &
    typeof icons;

export const allImages: TAllImages = {
    ...backgrounds,
    ...logos,
    ...loader,
    ...icons,
};

export { default as backgrounds } from './backgrounds';
export { default as logos } from './logos';
export { default as loader } from './loader';
export { default as icons } from './icons';

export const {
    LOADER__SPINNER,
} = allImages;

export default allImages;
