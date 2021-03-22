import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../types/hooks';
import { SignUpInput } from '../../../../types/sign_up';
import { Dropdown, Input, Button } from '../../../base';
import { updateField, updatePage, resetState } from './actions';
import COLORS from '../../../../config/colors';
import './SignUpForm.scss';
 
const SignUpForm: React.FC = () => {
    const {step, steps, done} = useAppSelector(globalState => globalState.signUp);
    const dispatch = useDispatch();

    const isDone = step >= steps.length;

    useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, [dispatch])

    const handleUpdate = (field: SignUpInput, value: string | boolean) => {
        dispatch(updateField(field.key, value));

        return field.validationFunction ? field.validationFunction(value).isValid : true;
    };

    const nextPage = () => {
        dispatch(updatePage(true));
    }

    return (
        <div className='sign_up_form'>
            {isDone ? (
                <>
                    <h1>{done.header}</h1>
                    <p>{done.description}</p>
                </>
            ) : (
                <>
                {steps[step].fields.map((field, i) => (
                    <div className='input-wrapper' key={i}>
                        <div className='input-column-wrapper'>
                        <label>{field.label}</label>
                        {field.type === 'text' && (<Input
                                style={{width: '100%'}}
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}/>
                        )}
                        {field.type === 'dropdown' && (<Dropdown
                                options={field.options !== undefined ? field.options.map(o => ({
                                    label: o,
                                    value: o
                                })) : []}
                                onChange={(val) => handleUpdate(field, val)}
                                value={field.value.toString()}
                                style={{width: '50%'}}/>
                        )}
                        {field.type === 'phone' && (<Input
                                style={{width: '100%'}}
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}/>
                        )}
                        {field.type === 'checkbox' && (<input type='checkbox'
                                checked={Boolean(field.value)}
                                onChange={() => handleUpdate(field, !field.value)}/>
                        )}
                        </div>
                    </div>)
                )}
                <div className='footer'>
                    <Button colors={{
                        text: COLORS.WHITE,
                        background: COLORS.SUCCESS_GREEN
                    }}
                    label='Next'
                    style={{width: 150}}
                    onClick={nextPage}/>
                </div>
                </>
            )}
        </div>
    );
}
 
export default SignUpForm;