import { UPDATE_COUNTRY } from './actionTypes';
import { CountryKey } from '../../../types/country';
import { countries } from '../../../config';

export const updateCountry = (key: CountryKey) => ({
    type: UPDATE_COUNTRY,
    payload: countries[key]
});