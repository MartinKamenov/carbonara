import React from 'react';
import { ListAnimator } from '..';
import { useAppSelector } from '../../../types/hooks';
import './HomePageMain.scss';
 
const HomePageMain: React.FC = () => {
    const {cities} = useAppSelector(globalState => globalState.countrySelect);
    return (
        <div className='home-page-main-container'>
            <img alt='home-page-main' src='/assets/wallpaper.png' className='main-image'/>
            <div className='content'>
                <h1>Used for restaurants</h1>
                <h1>for free in <ListAnimator values={cities}/></h1>
            </div>
        </div>
    );
}
 
export default HomePageMain;