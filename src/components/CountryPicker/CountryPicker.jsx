import React from 'react';
import {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api/index';
import styles from './CountryPicker.module.css'

export default function CountryPicker ({handleCountryChange}) {
    const [countries, setCountries] = useState([]);
     useEffect(()=>{
         const fetchAPI =async () => {
            setCountries(await fetchCountries())
         }
         fetchAPI();
    });
 return(
    <FormControl className={styles.formControl}>
    <NativeSelect className={styles.select} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
      {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
    </NativeSelect>
  </FormControl>
 )

}