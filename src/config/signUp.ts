import * as validators from '../helpers/validators';
import { SignUpState } from '../types/sign_up';

const signUpConfig: SignUpState = {
    step: 0,
    steps: [
        {
            description: '1. Create Account',
            fields: [
                {
                    key: 'firstName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'First Name',
                    valid: false
                },
                {
                    key: 'lastName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'First Name',
                    valid: false
                },
                {
                    key: 'phoneNumber',
                    value: '',
                    validationFunction: validators.name,
                    placeholder: '9223 7774',
                    type: 'phone',
                    label: 'Phone Number',
                    valid: true
                },
                {
                    type: 'dropdown',
                    options: [
                        'Manager',
                        'Employee',
                    ],
                    value: 'Manager',
                    label: 'Role',
                    key: 'role',
                    valid: true
                }
            ]
        },
        {
            description: '2. Set up restaurant',
            fields: [
                {
                    key: 'firstName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'Restaurant Name',
                    valid: false
                },
                {
                    key: 'address',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    type: 'text',
                    label: 'Address',
                    valid: false
                },
                {
                    key: 'postCode',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    type: 'text',
                    label: 'Post Code',
                    valid: false
                },
                {
                    key: 'city',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    placeholder: '9223 7774',
                    type: 'text',
                    label: 'City',
                    valid: false
                },
                {
                    key: 'country',
                    value: 'United Kingdom',
                    type: 'dropdown',
                    options: [
                        'United Kingdom',
                        'Italy'
                    ],
                    label: 'Country',
                    valid: true
                },
                {
                    type: 'checkbox',
                    required: true,
                    value: false,
                    label: 'I have read and agreed to the Terms of Use and agreed to Privacy Policy.',
                    key: 'termsAndConditions',
                    valid: false
                }
            ]
        }
    ],
    done: {
        header: 'Done',
        description: `
Downlaod the Carbonara App on your phone or tablet now!
It's easy just click open the welcome email thats been sent to your email on any device and click download.
It will take you to the app store. 
If you are already on a device , click download to get started now!`
    }
}

export default signUpConfig;