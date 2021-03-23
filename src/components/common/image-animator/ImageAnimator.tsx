import React, { useEffect, useRef } from 'react';
import './ImageAnimator.scss';

export type ImageAnimatorProps = {
    images: string[];
}
 
const ImageAnimator: React.FC<ImageAnimatorProps> = ({
    images
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstValueRef = useRef<HTMLImageElement>(null);
    const secondValueRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const removeAnimations = (iteration: number) => {
            if(containerRef.current && firstValueRef.current && secondValueRef.current) {
                firstValueRef.current.setAttribute('src', images[iteration % images.length]);
                secondValueRef.current.setAttribute('src', images[(iteration + 1) % images.length]);
                containerRef.current.className = 'inner-image-animation-container notanimating';
            }
        }

        let iteration = 0;
        removeAnimations(iteration);

        const interval = setInterval(() => {
            if(containerRef.current) {
                containerRef.current.className = 'inner-image-animation-container animating';
            }

            setTimeout(() => {
                removeAnimations(iteration);
            }, 4000);
            iteration++;
        }, 10000);

        return () => {
            clearInterval(interval);
        }
    }, [images]);

    return (
        <div className='image-animation-container'>
            <div className='inner-image-animation-container notanimating' ref={containerRef}>
                <img
                    className='firstValue'
                    ref={firstValueRef}
                    alt='first' />
                <img
                    className='secondValue'
                    ref={secondValueRef}
                    alt='second' />
            </div>
        </div>
    );
}
 
export default ImageAnimator;