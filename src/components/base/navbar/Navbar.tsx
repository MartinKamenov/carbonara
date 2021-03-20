import React from 'react';
import './Navbar.scss';
import { CountrySelect } from '../../common';

const Navbar : React.FC = () => {
    return (
        <div>
            <div className='navbar-general-section'>
                <CountrySelect />
            </div>
            <div className='navbar-container'>
                <div className='left-align'>
                    A
                </div>
                <div className='right-align'>
                    B
                </div>
            </div>
        </div>
    )
};

export default Navbar;