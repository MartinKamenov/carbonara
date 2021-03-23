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

    const prevPage = () => {
        dispatch(updatePage(false));
    }

    const isValid = () => steps[step].fields.every(f => f.valid);

    return (
        <div className={`sign_up_form ${isDone ? 'done' : ''}`}>
            {isDone ? (
                <>
                    <h1>{done.header}</h1>
                    <p>{done.description}</p>
                </>
            ) : (
                <>
                {steps[step].fields.map((field) => (
                    <div className='input-wrapper' key={field.key}>
                        <div className='input-column-wrapper'>
                        {field.type !== 'checkbox' &&
                            <label>{field.label}</label>
                        }
                        {field.type === 'text' && (<Input
                                style={{width: '100%'}}
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}
                                validationFunction={field.validationFunction}
                                placeholder={field.placeholder}/>
                        )}
                        {field.type === 'dropdown' && (<Dropdown
                                options={field.options !== undefined ? field.options.map(o => ({
                                    label: o,
                                    value: o
                                })) : []}
                                onChange={(val) => handleUpdate(field, val)}
                                value={field.value.toString()}
                                style={{width: '50%', height: '50px'}}/>
                        )}
                        {field.type === 'phone' && (<div className='phone-wrapper'>
                            <div className='phone-prefix-container'>+44 GB</div>
                            <Input
                                className='phone-container'
                                value={field.value.toString()}
                                onChange={(val) => handleUpdate(field, val)}
                                placeholder={field.placeholder}
                                validationFunction={field.validationFunction}/>
                            </div>
                        )}
                        {field.type === 'checkbox' && (
                            <div className='input-wrapper'>
                                <input type='checkbox'
                                    style={{transform: 'scale(1.5)', marginRight: 10, marginLeft: 10}}
                                        checked={Boolean(field.value)}
                                        onChange={() => handleUpdate(field, !field.value)}/>
                                <label style={{ width: '50%' }}>{field.label}</label>
                            </div>
                        )}
                        </div>
                    </div>)
                )}
                <div className='footer'>
                    {
                        step !== 0 && (
                            <Button colors={{
                                text: COLORS.WHITE,
                                background: COLORS.GRAY_FONT
                            }}
                            label={'Back'}
                            style={{width: 150, marginRight: 10}}
                            onClick={prevPage}/>
                        )
                    }
                    <Button colors={{
                        text: COLORS.WHITE,
                        background: COLORS.SUCCESS_GREEN
                    }}
                    label={(step === (steps.length - 1)) ? 'Complete' : 'Next'}
                    style={{width: 150}}
                    onClick={nextPage}
                    disabled={!isValid()}/>
                </div>
                </>
            )}
        </div>
    );
}
 
export default SignUpForm;