/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

import { LangId, SizeId } from 'enums';

export type ComponentProps = {
    langId?: keyof typeof LangId;
    sizeId?: keyof typeof SizeId;
    customize?: {
        [key: string]: unknown;
    };
    children?: ReactNode;
};

export interface DomNodeProps {
    sizeId?: keyof typeof SizeId;
    theme: any;
};
