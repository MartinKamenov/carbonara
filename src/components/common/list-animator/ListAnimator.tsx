import React, { useEffect, useRef } from 'react';
import './ListAnimator.scss';

export type ListAnimatorProps = {
    values: string[];
}
 
const ListAnimator: React.FC<ListAnimatorProps> = ({
    values
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstValueRef = useRef<HTMLHeadingElement>(null);
    const secondValueRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let iteration = 0;
        removeAnimations(iteration);

        const interval = setInterval(() => {
            if(containerRef.current) {
                containerRef.current.className += 'animation-container animating';
            }

            setTimeout(() => {
                removeAnimations(iteration);
            }, 1000);
            iteration++;
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [values]);

    const removeAnimations = (iteration: number) => {
        if(containerRef.current && firstValueRef.current && secondValueRef.current) {
            debugger;
            firstValueRef.current.innerHTML = values[iteration % values.length];
            secondValueRef.current.innerHTML = values[(iteration + 1) % values.length];
            containerRef.current.className = 'animation-container notanimating';
        }
    }

    return (
        <div className='animation-container notanimating' ref={containerRef}>
            <h1 className='firstValue' ref={firstValueRef}></h1>
            <h1 className='secondValue' ref={secondValueRef}></h1>
        </div>
    );
}
 
export default ListAnimator;