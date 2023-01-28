import { getCSSObj } from 'utils';

import styled from '@emotion/styled';

import { THTMLElementProps } from '../../definitions';

export type TCWrapProps = THTMLElementProps;

export const CWrap = styled.div<TCWrapProps>`
  ${getCSSObj}
`;

export type TMainProps = THTMLElementProps;

export const Main = styled.main<TMainProps>`
  ${getCSSObj}
`;
