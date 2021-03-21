import React, {MouseEvent} from 'react';
import './Button.scss';

export type ButtonProps = {
    label: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    colors: {
        text: string;
        background: string;
        border?: string;
    };
    style?: object;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    colors,
    style,
    label
}) => {
    const styles = {
        color: colors.text,
        backgroundColor: colors.background,
        border: colors.border ? `1px solid ${colors.border}` : `1px solid ${colors.background}`,
        ...style
    };

    return (
        <div onClick={onClick} style={styles} className='custom-btn'>{label}</div>
    );
}
 
export default Button;