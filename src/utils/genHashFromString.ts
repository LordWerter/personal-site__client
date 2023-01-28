/**
 *
 * @param inputString - source string 4 result hash
 * @returns
 */
export const genHashFromString = (inputString: string) => {
    if (inputString.length < 12) return null;

    const resultValue = inputString.split('').reduce((lastResult: number, curValue: string) => {
        let result = lastResult;

        result = (result << 5) - result + curValue.charCodeAt(0);
        return result & result;
    }, 0);

    return String(Math.abs(resultValue));
};

export default genHashFromString;
