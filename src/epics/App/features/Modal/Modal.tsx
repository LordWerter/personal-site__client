import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import { CWrap, ModalWrap } from './Modal.styles';

export interface Props extends ComponentProps {}

export const Modal: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Modal };

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <ModalWrap sizeId={sizeId} theme={theme.modalwrap}></ModalWrap>
        </CWrap>
    );
};

export default Modal;
