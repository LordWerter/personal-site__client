import styled from '@emotion/styled';
import { getCSSObj } from 'utils';
import { DomNodeProps } from 'types';

export type DivCWrapProps = DomNodeProps;
export const DivCWrap = styled.div<DivCWrapProps>`
    ${getCSSObj}
`;
