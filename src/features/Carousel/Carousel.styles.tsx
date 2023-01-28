import styled from '@emotion/styled';
import { getCSSObj } from '../../utils';
import { THTMLElementProps } from '../../definitions';

export type TCWrapProps = THTMLElementProps;
export const CWrap = styled.div<TCWrapProps>`
  ${getCSSObj}
`;

export type TTrackProps = THTMLElementProps;
export const Track = styled.div<TTrackProps>`
  ${getCSSObj}
`;

export type TSliderWrapProps = THTMLElementProps;
export const SliderWrap = styled.div<TSliderWrapProps>`
  ${getCSSObj}
`;

export type TSlideProps = THTMLElementProps;
export const Slide = styled.div<TSlideProps>`
  ${getCSSObj}
`;

export type TArrowsWrapProps = THTMLElementProps;
export const ArrowsWrap = styled.div<TArrowsWrapProps>`
  ${getCSSObj}
`;

export type TArrowProps = THTMLElementProps;
export const Arrow = styled.div<TArrowProps>`
  ${getCSSObj}
`;

export type TLineProps = THTMLElementProps;
export const LeftLine = styled.div<TLineProps>`
  ${getCSSObj}
`;
export const RightLine = styled.div<TLineProps>`
  ${getCSSObj}
`;
