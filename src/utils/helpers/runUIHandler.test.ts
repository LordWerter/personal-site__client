/* eslint-disable */
import { runUIHandler, TRunUIHandlerParams } from './runUIHandler';

describe('RequestManager', () => {
    it('ReqsManager.addReq - core', async () => {
        const handleTestOnClick = async (error: Error) => true;

        const handleErrorCatch = async (error: Error) => true;

        const params2Test: TRunUIHandlerParams = {
            event: new Event('click'),
            handleErrorCatch,
        };

        await runUIHandler(handleTestOnClick, params2Test).then(async (result: any) => {
            await expect(result).toBe(true);
        });
    });
});
