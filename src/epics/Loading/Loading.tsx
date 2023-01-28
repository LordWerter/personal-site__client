import { useSelector } from 'react-redux';

import { useTheme } from '@emotion/react';

import { TComponentProps } from '../../definitions';
import {
  CWrap,
  FullDescription,
  ShortDescription,
  Spinner,
  TextBlock,
  Title,
} from './Loading.styles';

export type TProps = TComponentProps & {};

export const Loading: React.FC<TProps> = (): JSX.Element => {
  const {
    app: { sizeId, langId },
  } = useSelector((state: any) => state);

  // @ts-ignore
  const theme = { ...useTheme().Loading };

  return (
    <CWrap sizeId={sizeId} theme={theme.cwrap}>
      <Spinner />
      <TextBlock>
        <Title>Hello!</Title>
        <ShortDescription>Hello!</ShortDescription>
        <FullDescription>Hello!</FullDescription>
      </TextBlock>
    </CWrap>
  );
};

export default Loading;
