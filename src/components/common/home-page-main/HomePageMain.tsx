import React from 'react';
import { ListAnimator } from '..';
import COLORS from '../../../config/colors';
import { useAppSelector } from '../../../types/hooks';
import { Button } from '../../base';
import './HomePageMain.scss';
 
const HomePageMain: React.FC = () => {
    const {cities, name} = useAppSelector(globalState => globalState.countrySelect);
    const imageUrls = ['LOGO1.png', 'LOGO2.png', 'LOGO3.png', 'LOGO4.png', 'LOGO5.png', 'LOGO6.png']
        .map((name) => '/assets/' + name);
    return (
        <div className='home-page-main-container'>
            <img alt='home-page-main' src='/assets/wallpaper.png' className='main-image'/>
            <div className='content'>
                <h1>Used for restaurants</h1>
                <h1>for free in <ListAnimator values={cities}/></h1>
                <Button colors={{
                    background: COLORS.BRIGHT_YELLOW,
                    text: COLORS.WHITE
                }} label='Get started' style={{ maxWidth: 150 }}/>
            </div>
            <div className='footer'>
                <h3>Trusted across {name}</h3>
                <div className='logos-container'>
                {imageUrls.map((url, i) => (
                    <img key={i} src={url} alt={'Logo ' + i}/>
                ))}
                </div>
            </div>
        </div>
    );
}
 
export default HomePageMain;