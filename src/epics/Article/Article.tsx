import React, { Suspense } from 'react';

import type { TComponentProps } from '../../definitions';

export type TProps = TComponentProps & {};

export const Article: React.FC<TProps> = (): JSX.Element => {
  const Splash: React.FC<TProps> = (): JSX.Element => {
    return <div>Loading</div>;
  };

  return <Suspense fallback={<Splash />}>Hello!</Suspense>;
};

export default Article;
