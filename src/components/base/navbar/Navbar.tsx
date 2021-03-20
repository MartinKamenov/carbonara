import React from 'react';
import './Navbar.scss';
import { CountrySelect } from '../../common';

const Navbar : React.FC = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-general-section'>
                <CountrySelect />
            </div>
            <div className='navbar-navigation-container'>
                <div className='left-align'>
                    <img src='/assets/carbonara-icon.jpg' alt='carbonara' className='application-icon'/>
                    <img src='/assets/carbonara-text.jpg' alt='carbonara-moto' className='application-text'/>
                </div>
                <div className='right-align'>
                    <div className='btn btn-success'>Success</div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;