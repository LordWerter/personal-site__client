import styled from '@emotion/styled';

import { DomNodeProps } from '../../../../types';
import { getCSSObj } from '../../../../utils';

export type TCWrapProps = DomNodeProps;

export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;

export type TColumnProps = DomNodeProps;

export const Column = styled.main<TColumnProps>`
    ${getCSSObj}
`;
