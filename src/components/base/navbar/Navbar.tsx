import React, { useState } from 'react';
import './Navbar.scss';
import { CountrySelect } from '../../common';
import styled from 'styled-components';
import COLORS from '../../../config/colors';
import {Link, Button} from '../../base';
import {Link as RouteLink, NavLink} from 'react-router-dom';
import Icon from '../icon';

const NavSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.GRAY_FONT}
`;

const Navbar : React.FC = () => {
    const [open, setOpen] = useState(false);

    const renderRightContent = () => (
        <>
            <Link disabled label='Waitlist'/>
            <Link disabled label='Reservation'/>
            <Link disabled label='Why we are free?' style={{
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
            }}/>
            <Button
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    height: 50,
                    lineHeight: '30px',
                    width: 100,
                    whiteSpace: 'nowrap'
                }}
                label={'For diners'}
                colors={{
                    background: COLORS.WHITE,
                    border: COLORS.DARK_FONT,
                    text: COLORS.DARK_FONT
                }}/>
            <RouteLink to='sign_up'
                style={{marginLeft: 10, marginRight: 10, textDecoration: 'none'}}>
                <Button label={'Sign up'}
                    style={{
                        height: 50,
                        lineHeight: '30px',
                        width: 100,
                        whiteSpace: 'nowrap'
                    }}
                    colors={{
                        background: COLORS.DARK_YELLOW,
                        text: COLORS.WHITE
                    }}/>
            </RouteLink>
        </>
    );

    return (
        <div className='navbar-container'>
            <div className='navbar-general-section'>
                <CountrySelect />
            </div>
            <NavSeparator/>
            <div className='navbar-navigation-container'>
                <div className='left-align'>
                    <NavLink to='/'>
                        <img src='/assets/LOGO.png' alt='carbonara-moto' className='application-text'/>
                    </NavLink>
                </div>
                <div className='right-align-mobile'>
                    <Icon icon={open ? 'close' : 'hamburger'}
                        onClick={() => setOpen(!open)}
                        style={{color: COLORS.DARK_FONT,
                        fontSize: 30}}/>
                </div>
                <div className='right-align'>
                    {renderRightContent()}
                </div>
            </div>
            <NavSeparator/>
            {open && (
                <div className='mobile-menu'>
                    {renderRightContent()}
                </div>
            )}
        </div>
    )
};

export default Navbar;