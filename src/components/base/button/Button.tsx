import React, {MouseEvent} from 'react';

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
        padding: 10,
        borderRadius: 5,
        ...style
    };

    return (
        <div onClick={onClick} style={styles}>{label}</div>
    );
}
 
export default Button;