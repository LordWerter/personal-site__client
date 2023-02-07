import { THTMLElementProps } from 'definitions';
import { getCSSObj } from 'utils';

import styled from '@emotion/styled';

export type TCWrapProps = THTMLElementProps;

export const CWrap = styled.div<TCWrapProps>`
  ${getCSSObj}
`;
