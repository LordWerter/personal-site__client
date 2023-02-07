/* eslint-disable react-hooks/exhaustive-deps */
import {
    Suspense,
    useEffect,
} from 'react';

import {
    RootState,
    TComponentProps,
} from 'definitions';
import { setAppData } from 'epics';
import { useSelector } from 'react-redux';

import {
    Loading,
    Router,
} from '../';
import {
    Footer,
    Header,
    Loader,
    Menu,
    Modal,
} from './features';

export type TProps = TComponentProps & {};

const getCurSizeId = () => {
  if (window.innerWidth >= 1200) {
    return 'desktop';
  }
  if (window.innerWidth >= 720) {
    return 'laptop';
  }

  return 'mobile';
};
export const App: React.FC<TProps> = (): JSX.Element => {
  const {
    App: {
      sizeId = 'mobile',
      // langId = 'ru'
    },
  } = useSelector((state: RootState) => state);

  const handleResize = async () => {
      const curSizeId = getCurSizeId();
      setAppData({
        sizeId: curSizeId,
      });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);

  return (
      <Suspense fallback={<Loading />}>
        <Loader />
        <Modal />
        <Header />
        <Menu />
        <Router />
        <Footer />
      </Suspense>
  );
};

export default App;
