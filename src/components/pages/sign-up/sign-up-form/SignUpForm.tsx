import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../types/hooks';
import { SignUpInput } from '../../../../types/sign_up';
import { Dropdown, Input } from '../../../base';
import { updateField } from './actions';
import './SignUpForm.scss';
 
const SignUpForm: React.FC = () => {
    const {step, steps, done} = useAppSelector(globalState => globalState.signUp);
    const dispatch = useDispatch();

    const isDone = step > steps.length;

    const handleUpdate = (field: SignUpInput, value: string | boolean) => {
        dispatch(updateField(field.key, value));

        return field.validationFunction ? field.validationFunction(value).isValid : true;
    }
    return (
        <div className='sign_up_form'>
            {isDone ? (
                <>
                    <h1>{done.header}</h1>
                    <p>{done.description}</p>
                </>
            ) : (
                steps[step].fields.map((field) => {
                    switch(field.type) {
                        case 'text': {
                            return <Input
                                style={{width: '100%'}}
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}/>
                        } case 'dropdown': {
                            return <Dropdown
                                options={field.options ? field.options.map(o => ({
                                    label: o,
                                    value: o
                                })) : []}
                                onChange={(val) => handleUpdate(field, val)}
                                value={field.value.toString()}/>
                        } case 'phone': {
                            return <Input
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}/>
                        } case 'checkbox': {
                            return <input type='checkbox'
                                checked={Boolean(field.value)}
                                onChange={() => handleUpdate(field, !field.value)}/>
                        }
                    }
                })
            )}
        </div>
    );
}
 
export default SignUpForm;