import React, { ChangeEventHandler, useEffect, useState } from 'react';
import COLORS from '../../../config/colors';
import { ValidatorFunction } from '../../../types/sign_up';
import './Input.scss';

export interface InputProps {
    value: string;
    onChange: (value: string) => void;
    type?: string;
    validationFunction?: ValidatorFunction;
    valid?: boolean;
    style?: object;
    placeholder?: string;
    className?: string;
}
 
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    type='text',
    style={},
    validationFunction,
    placeholder,
    className
}) => {
    const [valid, setValid] = useState<boolean | undefined>(undefined);
    const [error, setError] = useState('');
    const backgroundColor = valid === false ? COLORS.ERROR_LIGTH_RED :
        valid === true ? COLORS.SUCCESS_LIGHT_GREEN : COLORS.WHITE;
    
    const [shouldValidate, setShouldValidate] = useState(false);

    useEffect(() => {
        if(shouldValidate) {
            validate(value);
        }
    }, [shouldValidate]);

    const validate = (value: string) => {
        if(shouldValidate && validationFunction) {
            const validationResult = validationFunction(value);
            setValid(validationResult.isValid);
            setError(validationResult.error);
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
        if(shouldValidate && validationFunction) {     
            validate(value);
        }
    }

    const onBlur = () => {
        setShouldValidate(true);
    }
    
    return (
        <div className='custom-input-container'>
            <input className={className ? className : 'custom-input'}
                style={{ backgroundColor, ...style }}
                value={value}
                onChange={handleOnChange}
                type={type}
                onBlur={onBlur}
                placeholder={placeholder}/>
            <div className='error-container' style={{height: 5}}>{error}</div>
        </div>
    );
}
 
export default Input;