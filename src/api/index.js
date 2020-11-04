import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchCountries=  async () =>{
    try{
        const countries= await Axios(`${url}/countries`)
        return countries.data.countries.map(country => country.name);
    }
    catch(error){
        return error;
    }
    
}

export const fetchCountryData = async (country) =>{
    let changeableUrl = await Axios(`${url}/countries/${country}`);
    return changeableUrl;
}


export const fetchData= async () =>{
    const data=await Axios(url)
    return data;
}
