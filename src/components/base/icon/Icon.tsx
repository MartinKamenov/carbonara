import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import COLORS from '../../../config/colors';

export type IconTypes = 'facebook' | 'instagram' | 'linked_in' | 'twitter' | 'youtube';
export type IconProps = {
    style?: object;
    icon: IconTypes;
}
 
const Icon: React.FC<IconProps> = ({icon, style}) => {
    const mapper = {
        'facebook': faFacebookF,
        'instagram': faInstagram,
        'linked_in': faLinkedinIn,
        'twitter': faTwitter,
        'youtube': faYoutube
    };

    return (
        <FontAwesomeIcon icon={mapper[icon]} style={style}/>
    );
}
 
export default Icon;