import React, {MouseEvent} from 'react';
import './Button.scss';
import COLORS from '../../../config/colors';

export type ButtonProps = {
    label: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    colors: {
        text: string;
        background: string;
        border?: string;
    };
    style?: object;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    colors,
    style,
    label,
    disabled=false
}) => {
    const borderColor = disabled ? COLORS.DISABLED_GRAY : colors.border ? colors.border : colors.background;
    const styles = {
        color: !disabled ? colors.text : COLORS.WHITE,
        backgroundColor: !disabled ? colors.background : COLORS.DISABLED_GRAY,
        border: `1px solid ${borderColor}`,
        ...style
    };

    return (
        <div onClick={disabled ? () => {} : onClick} style={styles} className='custom-btn'>{label}</div>
    );
}
 
export default Button;