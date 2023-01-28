import ACTION from './ACTION';
import APPLY from './APPLY';
import APP_OK from './APP_OK';
import BREAK from './BREAK';
import CANCEL from './CANCEL';
import CONFIRM from './CONFIRM';
import DECLINE from './DECLINE';
import ERROR_OK from './ERROR_OK';
import RETRY_IT from './RETRY';
import WARNING_OK from './WARNING_OK';

export const btnTypes = {
    ACTION,
    APPLY,
    APP_OK,
    BREAK,
    CANCEL,
    CONFIRM,
    DECLINE,
    ERROR_OK,
    RETRY: { ...RETRY_IT },
    WARNING_OK,
};

export default btnTypes;
