import React from 'react';
import Dropdown from '../../base/dropdown';
import { useDispatch } from 'react-redux';
import { countries } from '../../../config';
import { updateCountry } from './actions';
import { CountryKey } from '../../../types/country';
import { useAppSelector } from '../../../types/hooks';
 
const CountrySelec: React.FC = () => {
    const countrySelectState = useAppSelector((globalState) => globalState.countrySelect);
    const mappedCountries = Object.entries(countries).map(([key, value]) => ({
        label: value.name,
        value: key
    }));

    const dispatch = useDispatch();

    const handleChange = (value: CountryKey) => {
        dispatch(updateCountry(value));
    }

    return (
        <Dropdown options={mappedCountries} value={countrySelectState.key} onChange={handleChange}/>
    );
}
 
export default CountrySelec;
