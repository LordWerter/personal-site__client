/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const genObjectFromPairsArr = (arr: string[], separator: string): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  arr.forEach((pair: string) => {
    const pairArr: string[] = pair.split(separator);
    const [key, value] = pairArr;
    result[key] = value;
  });

  return result;
};

export const getURLHashParamByName = (paramName: string): string | null => {
  const hashStr = window.location.hash.substr(1);

  const pairsArr = hashStr.split('&');
  const hashObj = genObjectFromPairsArr(pairsArr, '=');
  return hashObj[paramName] || null;
};

export const getURLHashParams = <T>(paramNames: string[]): T => {
  const result = {};

  const hashStr = window.location.hash.substr(1).replace('?', '&');

  const pairsArr: string[] = hashStr.split('&');
  const hashObj: { [key: string]: string } = genObjectFromPairsArr(pairsArr, '=');

  paramNames.forEach((key: string) => {
    if (Object.prototype.hasOwnProperty.call(hashObj, key)) {
      // @ts-ignore
      result[key] = hashObj[key];
    }
  });
  // @ts-ignore
  return Object.keys(result).length ? result : Object.keys(hashObj).length ? hashObj : null;
};
