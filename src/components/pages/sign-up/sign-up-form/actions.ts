import {UPDATE_FIELD} from './actionTypes';

export const updateField = (key: string, value: string | boolean) => ({
    type: UPDATE_FIELD,
    payload: {
        key,
        value
    }
});