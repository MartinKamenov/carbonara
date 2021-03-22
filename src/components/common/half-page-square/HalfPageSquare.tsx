import React from 'react';
import COLORS from '../../../config/colors';
import { Button } from '../../base';
import './HalfPageSquare.scss';

export type HalfPageSquareProps = {
    image?: string;
    imageStyle?: object;
    style?: object;
    information?: {
        header: string;
        description: string;
    };
    link?: string;
}
 
const HalfPageSquare: React.FC<HalfPageSquareProps> = ({
    image,
    style,
    information,
    link,
    imageStyle
}) => {
    return (
        <div className='half-page-square-container col-md-6' style={style}>
            {image && (
                <img src={image} alt='square' style={imageStyle}/>
            )}
            <div className='central-content'>
                {information && (
                    <>
                        <h3>{information.header}</h3>
                        <div>{information.description}</div>
                    </>
                )}
                {link && (
                    <>
                        <h1 style={{textAlign: 'center'}}>{link}</h1>
                        <Button colors={{
                            text: COLORS.WHITE,
                            background: 'trasparent',
                            border: COLORS.WHITE
                        }} label='Find out more'
                        style={{maxWidth: 200}}/>
                    </>
                )}
            </div>
        </div>
    );
}
 
export default HalfPageSquare;