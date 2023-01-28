/* eslint-disable */
import { genHashFromString } from '..';

describe('genHashFromString', () => {
    it('Input String length is less than 12', async () => {
        const handleTestOnClick = genHashFromString('dfvwerf');
        expect(handleTestOnClick).toEqual(null);
    });

    it('Input String length is 12 or more', async () => {
        const handleTestOnClick = genHashFromString('dfvwerf234r1234r134f2erf23efr');
        expect(handleTestOnClick).toEqual('754239366');
    });
});
