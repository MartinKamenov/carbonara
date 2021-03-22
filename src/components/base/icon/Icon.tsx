import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export type IconTypes = 
    'facebook' |
    'instagram' |
    'linked_in' |
    'twitter' |
    'youtube' |
    'hamburger' |
    'close';
export type IconProps = {
    style?: object;
    icon: IconTypes;
    onClick?: (ev: any) => void;
}
 
const Icon: React.FC<IconProps> = (props) => {
    const {icon, style} = props;
    const mapper = {
        'facebook': faFacebookF,
        'instagram': faInstagram,
        'linked_in': faLinkedinIn,
        'twitter': faTwitter,
        'youtube': faYoutube,
        'hamburger': faBars,
        'close': faTimes
    };

    return (
        <FontAwesomeIcon {...props} icon={mapper[icon]} style={style}/>
    );
}
 
export default Icon;