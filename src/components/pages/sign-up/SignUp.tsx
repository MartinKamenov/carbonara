import React from 'react';
import { Carousel } from '../../base';
import './SignUp.scss';
import SignUpForm from './sign-up-form';

export type SignUpProps = {
    
}
 
const SignUp: React.FC<SignUpProps> = () => {
    return (
        <div className='sign-up-container'>
            <div className='row' style={{margin: 0, height: '100%'}}>
                <div className='col-md-6' style={{margin: 0, padding: 0}}>
                    <div className='form-container'>
                        <SignUpForm/>
                    </div>
                </div>
                <div className='col-md-6 d-none d-md-block' style={{margin: 0, padding: 0, height: '100%'}}>
                    <Carousel items={[
                        {
                            image: '/assets/sign_up_first.png',
                            caption: {
                                header: '“Easy to use and 100% FREE, I love usning Carbonara App.”'
                            }
                        },
                        {
                            image: '/assets/sign_up_second.png',
                            caption: {
                                header: '“Co-ordinate with your whole team with Carbonara.”'
                            }
                        },
                        {
                            image: '/assets/sign_up_third.png',
                            caption: {
                                header: '“My whole team learnt to use Carbonara in just minutes!”'
                            }
                        }
                    ]}
                    indicators={false}
                    controls={false}
                    interval={10000}/>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;