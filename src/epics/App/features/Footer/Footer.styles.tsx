import styled from '@emotion/styled';

import { THTMLElementProps } from '../../../../definitions';
import { getCSSObj } from '../../../../utils';

export type TCWrapProps = THTMLElementProps;

export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;

export type TColumnProps = THTMLElementProps;

export const Column = styled.main<TColumnProps>`
    ${getCSSObj}
`;
