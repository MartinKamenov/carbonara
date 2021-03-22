import * as validators from '../helpers/validators';
import { SignUpState } from '../types/sign_up';

const signUpConfig: SignUpState = {
    step: 0,
    steps: [
        {
            fields: [
                {
                    key: 'firstName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'First Name'
                },
                {
                    key: 'lastName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'First Name'
                },
                {
                    key: 'phoneNumber',
                    value: '',
                    validationFunction: validators.name,
                    placeholder: '9223 7774',
                    type: 'phone',
                    label: 'Phone Number'
                },
                {
                    type: 'dropdown',
                    options: [
                        'Manager',
                        'Employee',
                    ],
                    value: 'Manager',
                    label: 'Role',
                    key: 'role'
                }
            ]
        },
        {
            fields: [
                {
                    key: 'firstName',
                    value: '',
                    validationFunction: validators.name,
                    type: 'text',
                    label: 'Restaurant Name'
                },
                {
                    key: 'address',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    type: 'text',
                    label: 'Address'
                },
                {
                    key: 'postCode',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    type: 'text',
                    label: 'Post Code'
                },
                {
                    key: 'city',
                    value: '',
                    validationFunction: validators.alwaysValidWithThreeSymbols,
                    placeholder: '9223 7774',
                    type: 'text',
                    label: 'City'
                },
                {
                    key: 'country',
                    value: 'United Kingdom',
                    type: 'dropdown',
                    options: [
                        'United Kingdom',
                        'Italy'
                    ],
                    label: 'Country'
                },
                {
                    type: 'checkbox',
                    required: true,
                    value: false,
                    label: 'I have read and agreed to the Terms of Use and agreed to Privacy Policy.',
                    key: 'termsAndConditions'
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