/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TComponentProps, TState } from '../../definitions';
import { Router, Loading } from '..';
import { Modal, Loader, Header, MobMenu, Footer } from './features';
import { setAppData } from '../Store';

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
      visibility: {
        modal: showModal,
        header: showHeader,
        loader: showLoader,
        mobMenu: showMobMenu,
        footer: showFooter,
      },
    },
  } = useSelector((state: TState) => state);

  const dispatch = useDispatch();
  const handleResize = async () => {
    const curSizeId = getCurSizeId();
    dispatch(
      setAppData({
        sizeId: curSizeId,
      }),
    );
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
      {showModal ? <Modal /> : <></>}
      {showLoader ? <Loader /> : <></>}
      {showHeader && <Header />}
      {sizeId === 'mobile' && showMobMenu && <MobMenu />}
      <Router />
      {showFooter && <Footer />}
    </Suspense>
  );
};

export default App;
