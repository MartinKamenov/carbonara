import React, { ChangeEventHandler } from 'react';

export interface InputProps {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
 
const Input: React.SFC<InputProps> = ({
    value,
    onChange
}) => {
    return (
        <input className='custom-input' value={value} onChange={onChange}/>
    );
}
 
export default Input;