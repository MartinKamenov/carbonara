import React from 'react';
import './HomePageMain.scss';
 
const HomePageMain: React.FC = () => {
    return (
        <div className='home-page-main-container'>
            <img alt='home-page-main' src='/assets/wallpaper.png' className='main-image'/>
            <div className='content'>
                <h1>Used for restaurants</h1>
                <h1>for free in</h1>
            </div>
        </div>
    );
}
 
export default HomePageMain;