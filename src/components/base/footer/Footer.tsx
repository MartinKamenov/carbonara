import React from 'react';
import { Link } from 'react-router-dom';
import COLORS from '../../../config/colors';
import Button from '../button';
import Icon from '../icon';
import {IconTypes} from '../icon/Icon';
import './Footer.scss';

export interface Props {
    
}
 
const Footer: React.FC = () => {
    const icons: IconTypes[] = [
        'facebook',
        'linked_in',
        'twitter',
        'youtube',
        'instagram'
    ];

    return (
        <footer className='footer-container' style={{
            backgroundColor: COLORS.DARK_YELLOW,
            color: COLORS.DARK_FONT
        }}>
            <div className='container'>
                <div className='inner-container'>
                    <div>©2020 Carbonara</div>
                    <div>
                        <img src='/assets/Footerlogo.png' alt='footer'/>
                    </div>
                    <div className='right-align'>
                        <Link to='/sign_up' style={{marginBottom: 10}}>
                            <Button label='Sign up now'
                            colors={{text: COLORS.WHITE, background: COLORS.DARK_FONT}}/>
                        </Link>
                        <div className='social-media-row'>
                            {icons.map((icon, i) => <Icon icon={icon}
                                style={{
                                    color: COLORS.DARK_FONT,
                                    fontSize: 20,
                                    marginLeft: 20
                                }}/>)}
                        </div>
                    </div>
                </div>
                <div className='separator'/>
            </div>
        </footer>
    );
}
 
export default Footer;