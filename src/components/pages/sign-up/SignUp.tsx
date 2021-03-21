import React from 'react';
import { Carousel } from '../../base';
import './SignUp.scss';

export type SignUpProps = {
    
}
 
const SignUp: React.FC<SignUpProps> = () => {
    return (
        <div className='sign-up-container'>
            <div className='row' style={{margin: 0, height: '100%'}}>
                <div className='col-md-6' style={{margin: 0, padding: 0}}>
                    <div className='form-container'></div>
                </div>
                <div className='col-md-6 d-none d-md-block' style={{margin: 0, padding: 0, height: '100%'}}>
                    <Carousel images={[
                        '/assets/sign_up_first.png',
                        '/assets/sign_up_second.png',
                        '/assets/sign_up_third.png'
                    ]}/>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;