import styled from '@emotion/styled';
import { getCSSObj } from 'utils';
import { DomNodeProps } from 'types';

export type TCWrapProps = DomNodeProps;
export const CWrap = styled.div<TCWrapProps>`
    ${getCSSObj}
`;

export type TTrackProps = DomNodeProps;
export const Track = styled.div<TTrackProps>`
    ${getCSSObj}
`;

export type TSliderWrapProps = DomNodeProps;
export const SliderWrap = styled.div<TSliderWrapProps>`
    ${getCSSObj}
`;

export type TSlideProps = DomNodeProps;
export const Slide = styled.div<TSlideProps>`
    ${getCSSObj}
`;

export type TArrowsWrapProps = DomNodeProps;
export const ArrowsWrap = styled.div<TArrowsWrapProps>`
    ${getCSSObj}
`;

export type TArrowProps = DomNodeProps;
export const Arrow = styled.div<TArrowProps>`
    ${getCSSObj}
`;

export type TLineProps = DomNodeProps;
export const LeftLine = styled.div<TLineProps>`
    ${getCSSObj}
`;
export const RightLine = styled.div<TLineProps>`
    ${getCSSObj}
`;
