import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import COLORS from '../../../config/colors';
import './Carousel.scss';

export type CarouselProps = {
    items: {
        image?: string;
        caption?: {
            header: string;
            description?: string;
        }
    }[];
    indicators: boolean;
    controls: boolean;
    interval: number;
    style?: object;
}
 
const CarouselComponent: React.FC<CarouselProps> = (props) => {
    return (
        <Carousel 
            {...props}
            style={props.style || {width: '100%', height: '100%'}}>
        {props.items.map((item, i) => (
            <Carousel.Item key={i}>
                {item.image && (
                    <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`${i} slide`}/>
                )}
                {item.caption && (
                    <Carousel.Caption style={{
                        backgroundColor: COLORS.DARK_TRANSPARENT, width: '100%',
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}>
                    <h3>{item.caption.header}</h3>
                    <p>{item.caption.description || ''}</p>
                    </Carousel.Caption>
                )}
                
            </Carousel.Item>
        ))}
        </Carousel>
    );
}
 
export default CarouselComponent;