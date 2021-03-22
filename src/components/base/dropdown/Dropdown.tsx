import React from 'react';
import { UISelectOption } from '../../../types/dropdown';
import './Dropdown.scss';

export interface Props {
    options: UISelectOption[];
    value: any;
    onChange: (value: any) => void;
    name?: string;
    style?: object;
}
 
const Dropdown: React.FC<Props> = ({
    name,
    value,
    options,
    onChange,
    style={}
}) => {
    const onChangeHandler = (ev: any) => onChange(ev.target.value);

    return (
        <select name={name} onChange={onChangeHandler} value={value} style={style}>
            {options.map((option, i) => (
                <option value={option.value} key={i}>{option.label}</option>
            ))}
        </select>
    );
}
 
export default Dropdown;