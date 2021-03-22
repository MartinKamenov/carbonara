import React, { ChangeEventHandler, useState } from 'react';
import COLORS from '../../../config/colors';
import './Input.scss';

export interface InputProps {
    value: string;
    onChange: (value: string) => boolean;
    type?: string;
    validationFunction?: (value: string) => boolean;
    valid?: boolean;
    style?: object;
    placeholder?: string;
}
 
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    type='text',
    style={},
    validationFunction,
    placeholder
}) => {
    const [valid, setValid] = useState(true);
    const backgroundColor = valid === false ? COLORS.ERROR_LIGTH_RED :
        valid === true ? COLORS.SUCCESS_LIGHT_GREEN : COLORS.WHITE;
    
    const [shouldValidate, setShouldValidate] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
        if(shouldValidate && validationFunction) {
            setValid(validationFunction(value));
        }
    }
    
    return (
        <input className='custom-input'
            style={{ backgroundColor, ...style }}
            value={value}
            onChange={handleOnChange}
            type={type}
            onBlur={() => setShouldValidate(true)}
            placeholder={placeholder}/>
    );
}
 
export default Input;