import React from 'react';
import { Link } from '..';
import { bullet } from '../../../types/bullet';
import './Bullet.scss';

export type BulletProps = {
    bullet: bullet;
}
 
const Bullet: React.FC<BulletProps> = ({
    bullet
}) => {
    return (
        <div className='bullet-container'>
            <img src={bullet.icon} alt={bullet.description}/>
            <div className='bullet-content'>
                <h3>{bullet.description}</h3>
                <Link to={bullet.link.to || ''}
                    style={{textDecoration: 'underline', margin: 0}}
                    label={bullet.link.label}
                    disabled={bullet.link.disabled}>
                </Link>
            </div>
        </div>
    );
}
 
export default Bullet;