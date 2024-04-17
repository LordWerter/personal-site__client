import { DomNodeProps } from 'types';
import { getCSSObj } from 'utils';

import styled from '@emotion/styled';

export type CWrapProps = DomNodeProps;

export const CWrap = styled.div<CWrapProps>`
    ${getCSSObj}
`;
