import * as actionTypes from './actionTypes';
import { action } from '../../../../types/request.middleware';
import initialState from './initialState';
import { SignUpState } from '../../../../types/sign_up';
import cloneDeep from 'lodash/cloneDeep';

const reducer = (state: SignUpState = cloneDeep(initialState), action: action) => {
    switch(action.type) {
        case actionTypes.UPDATE_FIELD: {
            const {key, value} = action.payload;
            const stateCopy = {...state};
            const res = stateCopy.steps[stateCopy.step].fields.find((input: any) => input.key === key);
            if(res) {
                res.value = value;
                if(res.validationFunction) {
                    res.valid = res.validationFunction(value).isValid;
                } else {
                    res.valid = true;
                }
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
        case actionTypes.RESET_STATE: {
            return cloneDeep(initialState);
        }
        default: {
            return {...state};
        }
    }
}

export default reducer;