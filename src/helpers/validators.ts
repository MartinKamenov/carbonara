import { ValidatorFunctionResult } from './../types/sign_up';
import { ValidatorFunction } from "../types/sign_up";

const paramsTypeWrapper = (callback: (val: string) => ValidatorFunctionResult): ValidatorFunction => {
    return (val: string | Boolean) => {
        const stringVal = '' + val;
        return callback(stringVal);
    }
}

export const name: ValidatorFunction = paramsTypeWrapper((val: string = '') => {
    const regex = /[a-zA-Z]/g;
    const isValid = val.length >= 3 && val.length <= 30 && regex.test(val);
    return {
        isValid,
        error: isValid ? '' : 'Name\'s length must be between 3 and 30 letters'
    };
});

export const phoneNumber: ValidatorFunction = paramsTypeWrapper((val: string = '') => {
    const regex = /^[0-9]/g;
    const isValid = val.length === 8 && regex.test(val);
    return {
        isValid,
        error: isValid ? '' : 'Number must conain 8 numbers'
    };
});

export const url: ValidatorFunction = paramsTypeWrapper((val: string = '') => {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    const isValid = regex.test(val);

    return {
        isValid,
        error: isValid ? '' : 'Icorect url format'
    };
});

export const alwaysValidWithThreeSymbols: ValidatorFunction = paramsTypeWrapper((val: string) => ({
    isValid: val.length >= 3,
    error: val.length >= 3 ? '' : 'Length must be at least 3 symbols'
}));

export const requiredCheck: ValidatorFunction = (val: string | boolean) => ({
    isValid: Boolean(val),
    error: ''
});