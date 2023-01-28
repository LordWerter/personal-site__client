/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export type TSize = 'mobile' | 'laptop' | 'desktop';
export type TLang = 'ru' | 'en';

export type TComponentProps = {
  sizeId?: TSize;
  langId?: TLang;
  customize?: {
    [key: string]: unknown;
  };
  children?: ReactNode;
};

export type THTMLElementProps = {
  sizeId: TSize;
  theme: any;
};
