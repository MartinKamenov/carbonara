import initialState from './initialState';
import { action } from '../../../types/request.middleware';
import * as actionTypes from './actionTypes';

const reducer = (state=initialState, action: action) => {
    switch(action.type) {
        case actionTypes.UPDATE_COUNTRY: {
            return action.payload;
        }
        default: {
            return {...state};
        }
    }
};

export default reducer;