import React from 'react';
import COLORS from '../../../config/colors';
import { Bullet } from '../../base';
import './HomePageBullets.scss';
 
const HomePageBullets: React.FC = () => {
    const bullets = [
        {
            icon: '/assets/Step1.png',
            description: 'Download & create an account for free.',
            link: {
                label: 'Sign up now',
                disabled: false,
                to: '/sign_up'
            },
        },
        {
            icon: '/assets/Step2.png',
            description: 'Set up your restaurant settings and location.',
            link: {
                label: 'Learn about features',
                disabled: true
            },
        },
        {
            icon: '/assets/Step3.png',
            description: 'Start managing your customers!',
            link: {
                label: 'Learn how',
                disabled: true
            },
        }
    ];
    return (
        <div className='home-page-bullets-container' style={{color: COLORS.DARK_FONT}}>
            <h1 className='bullets-header'>Carbonara is 100% FREE and easy to set up</h1>
            <div className='container'>
                <div className='row'>
                    {bullets.map((bullet, i) => (
                        <div className='col-md-4' key={i}>
                            <Bullet bullet={bullet}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default HomePageBullets;