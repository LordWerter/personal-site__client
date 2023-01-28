import colors from './colors';
import components from './components';
import containers from './containers';
import images from './images';

export const themes = {
  colors,
  ...components,
  ...containers,
  images,
};

export default themes;
