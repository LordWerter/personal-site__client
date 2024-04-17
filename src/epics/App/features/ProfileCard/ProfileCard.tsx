import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
// import lang, { TLangMap } from './lang';
import { CWrap, ModalWrap } from './ProfileCard.styles';

export interface Props extends ComponentProps {}

export const ProfileCard: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId = 'MOBILE' },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Modal };
    // const langs: any = (lang as TLangMap)[langId as 'en' | 'ru'];

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <ModalWrap sizeId={sizeId} theme={theme.modalwrap}></ModalWrap>
        </CWrap>
    );
};

export default ProfileCard;
