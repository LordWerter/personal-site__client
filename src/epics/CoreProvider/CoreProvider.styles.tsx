import { DomNodeProps } from 'types';
import { getCSSObj } from 'utils';

import styled from '@emotion/styled';

export type TCWrapProps = DomNodeProps;

export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;
