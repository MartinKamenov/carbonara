import React from 'react';
import COLORS from '../../../config/colors';
import HalfPageSquare from '../half-page-square';
import { HalfPageSquareProps } from '../half-page-square/HalfPageSquare';
import './HomeSquaresSection.scss';

export interface HomeSquaresSectionProps {
    
}
 
const HomeSquaresSection: React.FC<HomeSquaresSectionProps> = () => {
    const config: HalfPageSquareProps[][] = [
        [{
            image: '/assets/first.png',
            link: 'Non-Reservation Restaurants',
            style: {
                color: COLORS.WHITE,
            }
        },
        {
            image: '/assets/second.png',
            link: 'Reservation Restaurants',
            
            style: {
                color: COLORS.WHITE,
            }
        }],
        [{
            information: {
                header: '“Light, Fast & Powerful, I love how easy Carbonara is to use”',
                description: ''
            }
        },
        {
            image: '/assets/third.png'
        }],
        [{
            image: '/assets/fourth.png',
            imageStyle: {
                height: '70%',
                marginTop: '15%',
                width: '70%',
                marginLeft: '15%'
            }
        },
        {
            information: {
                header: 'A simple waitlist for your whole team',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus '
            }
        }],
        [{
            information: {
                header: 'Simple to use Table management',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus '
            }
        },{
            image: '/assets/fifth.png',
            imageStyle: {
                height: '70%',
                marginTop: '15%',
                width: '70%',
                marginLeft: '15%'}
        }],
    ];

    return (
        <div className='home-squares-section'>
            {config.map((row, i) => (
                <div className='row' style={{margin: 0}} key={i}>
                    {row.map((square: HalfPageSquareProps, j: number) => (
                        <HalfPageSquare {...square} key={j}/>
                    ))}
                </div>
            ))}
        </div>
    );
}
 
export default HomeSquaresSection;