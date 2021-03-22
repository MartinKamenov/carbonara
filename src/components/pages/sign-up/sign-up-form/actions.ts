import {UPDATE_FIELD, NEXT_STEP, PREV_STEP, RESET_STATE} from './actionTypes';

export const updateField = (key: string, value: string | boolean) => ({
    type: UPDATE_FIELD,
    payload: {
        key,
        value
    }
});

export const updatePage = (next: boolean) => ({
    type: next ? NEXT_STEP : PREV_STEP
});

export const resetState = () => ({
    type: RESET_STATE
});
