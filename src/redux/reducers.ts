import {combineReducers} from 'redux';
import {countrySelectReducer as countrySelect} from '../components/common/country-select';
import {signUpReducer as signUp} from '../components/pages/sign-up/sign-up-form';

export default combineReducers({
    countrySelect,
    signUp
});