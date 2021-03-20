import React from 'react';
import './Navbar.scss';
import { CountrySelect } from '../../common';
import styled from 'styled-components';
import COLORS from '../../../config/colors';
import {Link, Button} from '../../base';
import {Link as RouteLink} from 'react-router-dom';

const NavSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.GRAY_FONT}
`;

const Navbar : React.FC = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-general-section'>
                <CountrySelect />
            </div>
            <NavSeparator/>
            <div className='navbar-navigation-container'>
                <div className='left-align'>
                    <img src='/assets/carbonara-icon.jpg' alt='carbonara' className='application-icon'/>
                    <img src='/assets/carbonara-text.jpg' alt='carbonara-moto' className='application-text'/>
                </div>
                <div className='right-align'>
                    <Link disabled label='Waitlist'/>
                    <Link disabled label='Reservation'/>
                    <Link disabled label='Why we are free?' style={{fontWeight: 'bold'}}/>
                    <Button
                        style={{marginLeft: 10, marginRight: 10}}
                        label={'For diners'}
                        colors={{
                            background: COLORS.WHITE,
                            border: COLORS.DARK_FONT,
                            text: COLORS.DARK_FONT
                        }}/>
                    <RouteLink to='sign_up'
                        style={{marginLeft: 10, marginRight: 10}}>
                        <Button label={'Sign up'}
                            colors={{
                                background: COLORS.DARK_YELLOW,
                                text: COLORS.WHITE
                            }}/>
                    </RouteLink>
                </div>
            </div>
        </div>
    )
};

export default Navbar;