import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

export type CarouselProps = {
    images: string[];
}
 
const CarouselComponent: React.FC<CarouselProps> = ({
    images
}) => {
    return (
        <Carousel style={{width: '100%', height: '100%'}}
        indicators={false}
        controls={false}
        >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images[0]}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images[1]}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images[2]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}
 
export default CarouselComponent;