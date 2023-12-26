import styled from '@emotion/styled';

import { THTMLElementProps } from '../../definitions';
import { getCSSObj } from '../../utils';

export type TCWrapProps = THTMLElementProps;

export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;

export type TContentAreaProps = THTMLElementProps;

export const ContentArea = styled.main<TContentAreaProps>`
    ${getCSSObj}
`;

export type TShortDescriptionProps = THTMLElementProps;

export const ShortDescription = styled.main<TShortDescriptionProps>`
    ${getCSSObj}
`;

export type TSpinnerProps = THTMLElementProps;

export const Spinner = styled.main<TSpinnerProps>`
    ${getCSSObj}
`;

export type TTextBlockProps = THTMLElementProps;

export const TextBlock = styled.main<TTextBlockProps>`
    ${getCSSObj}
`;

export type TTitleProps = THTMLElementProps;

export const Title = styled.main<TTitleProps>`
    ${getCSSObj}
`;
