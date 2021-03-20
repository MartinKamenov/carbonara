import React from 'react';
import {Link as RouteLink} from 'react-router-dom';
import './Link.scss';

export type LinkProps = {
    disabled?: boolean;
    label: string;
    to?: string;
    style?: object;
}
 
const Link: React.SFC<LinkProps> = ({
    disabled = false,
    to='/',
    label,
    style
}) => {
    return (
        <RouteLink to={to} className='custom-link' style={style} onClick={(e) => {
            if(disabled) {
                e.preventDefault();
                e.stopPropagation();
            }
        }}>
            {label}
        </RouteLink>
    );
}
 
export default Link;