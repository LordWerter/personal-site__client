import styled from '@emotion/styled';

import { DomNodeProps } from 'types';
import { getCSSObj } from '../../utils';

export type TCWrapProps = DomNodeProps;

export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;

export type TContentAreaProps = DomNodeProps;

export const ContentArea = styled.main<TContentAreaProps>`
    ${getCSSObj}
`;

export type TShortDescriptionProps = DomNodeProps;

export const ShortDescription = styled.main<TShortDescriptionProps>`
    ${getCSSObj}
`;

export type TSpinnerProps = DomNodeProps;

export const Spinner = styled.main<TSpinnerProps>`
    ${getCSSObj}
`;

export type TTextBlockProps = DomNodeProps;

export const TextBlock = styled.main<TTextBlockProps>`
    ${getCSSObj}
`;

export type TTitleProps = DomNodeProps;

export const Title = styled.main<TTitleProps>`
    ${getCSSObj}
`;
