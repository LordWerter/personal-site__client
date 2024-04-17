import { Suspense, useEffect } from 'react';

import { ComponentProps } from 'types';
import { setAppData, Loading, Router } from 'epics';
import { Footer, Header, Loader, Menu, Modal } from './features';

export interface Props extends ComponentProps {};

const getCurSizeId = () => {
    if (window.innerWidth >= 1200) {
        return 'desktop';
    }
    if (window.innerWidth >= 720) {
        return 'laptop';
    }
    return 'mobile';
};

export const App: React.FC<Props> = (): JSX.Element => {

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
