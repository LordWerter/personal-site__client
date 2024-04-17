import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { RootState, ComponentProps } from 'types';
import lang, { TLangMap } from './lang';
import {
    ContentArea,
    CWrap,
    ShortDescription,
    Spinner,
    TextBlock,
    Title,
} from './Loading.styles';

export interface Props extends ComponentProps {}

export const Loading: React.FC<Props> = (): JSX.Element => {
    const {
        App: { sizeId, langId },
    } = useSelector((state: RootState) => state);

    // @ts-ignore
    const theme = { ...useTheme().Loading };
    const langs: any = (lang as TLangMap)[langId as 'en' | 'ru'];

    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <ContentArea sizeId={sizeId} theme={theme.contentarea}>
                <Spinner sizeId={sizeId} theme={theme.spinner} />
                <TextBlock sizeId={sizeId} theme={theme.textblock}>
                    {!!langs?.title && (
                        <Title sizeId={sizeId} theme={theme.title}>
                            {langs.title}
                        </Title>
                    )}
                    {!!langs?.shortDescription && (
                        <ShortDescription
                            sizeId={sizeId}
                            theme={theme.shortdescription}>
                            {langs.shortDescription}
                        </ShortDescription>
                    )}
                </TextBlock>
            </ContentArea>
        </CWrap>
    );
};

export default Loading;
