import * as actionTypes from './actionTypes';
import { action } from '../../../../types/request.middleware';
import initialState from './initialState';
import { SignUpState } from '../../../../types/sign_up';

const reducer = (state: SignUpState = initialState, action: action) => {
    switch(action.type) {
        case actionTypes.UPDATE_FIELD: {
            const {key, value} = action.payload;
            const stateCopy = {...state};
            const res = stateCopy.steps[stateCopy.step].fields.find((input: any) => input.key === key);
            if(res) {
                res.value = value;
            }

            return stateCopy;
        }
        case actionTypes.NEXT_STEP: {
            const stateCopy = {...state};
            stateCopy.step++;
            return stateCopy;
        }
        case actionTypes.PREV_STEP: {
            const stateCopy = {...state};
            stateCopy.step--;
            return stateCopy;
        }
        default: {
            return {...state};
        }
    }
}

export default reducer;