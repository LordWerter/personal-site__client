export type THandle2Run = (...args: any[]) => any;
export type THandlerMode = 'DEVELOPMENT' | 'SENTRY' | 'FORCE';
export type TRunUIHandlerParams = {
    event: any;
    handleErrorCatch: (error: Error) => Promise<any>;
};

export type TRunUIHandler = (handler2Run: THandle2Run, params: TRunUIHandlerParams) => Promise<unknown>;

export type TErrorCatchParams = {
    error: any;
    handleErrorCatch: (error: Error) => any;
};

export const processHandlerErrorCatch = async (params: TErrorCatchParams) => {
    await params.handleErrorCatch(params.error);
    if (process.env.NODE_ENV === 'development') console.error(params.error);
    return false;
};

export const runUIHandler: TRunUIHandler = async (handler2Run, params) => {
    const { event, handleErrorCatch } = params;
    try {
        return await new Promise((resolve) => {
            handler2Run(event).then((result: any) => {
                resolve(result || true);
            });
        });
    } catch (error_1: any) {
        return await processHandlerErrorCatch({ error: error_1, handleErrorCatch });
    }
};
