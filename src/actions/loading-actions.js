import { createAction } from 'Utils/create-action';
import { LOADING_STARTED, LOADING_COMPLETED, LOADING_FAILED } from 'Constants/loading-types';

const startLoading    = createAction(LOADING_STARTED);
const completeLoading = createAction(LOADING_COMPLETED, 'payload');
const failLoading     = createAction(LOADING_FAILED);

export { startLoading, completeLoading, failLoading };