import { useRef, MutableRefObject } from 'react';

export type ConstRef<T> = Readonly<MutableRefObject<T>>;

export const useConstRef = <T>(value: T): ConstRef<T> => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useConstRef;
