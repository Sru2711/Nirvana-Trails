import { action, makeObservable, observable } from "mobx";
import { getAllCountries as onGetAllCountries } from "../apiCall";


 class CountriesStore {
   countries=[];
   allCountries=[];
   countryDetails=[];
   error={};

   constructor() {
    makeObservable(this, {
        countries:observable,
        countryDetails:observable,
        allCountries:observable,
        addCountries: action,
        getCountryDetails: action,
      

    })
   }

    // async callApi() {
    //   this.allCountries= await onGetAllCountries()
    // } 
   async addCountries(){
     
        let countriesFromApi= await onGetAllCountries()
        return countriesFromApi.map((country) => {
          
          return this.countries=country.name.official
        })
  }

  async getCountryDetails(countryName) {
    try {
        // Fetch all countries
        let countriesFromApi = await onGetAllCountries();
        
        // Find the country details
        let data = countriesFromApi
            .filter(cName => cName.name.official === countryName) 
            .map(cName => ({
                FlagImg: cName.flags.png, 
                Name: cName.name.official,
                Native_name: cName.name.nativeName ? Object.values(cName.name.nativeName)[0].official : "N/A", 
                Timezones: cName.timezones, 
                Continent: cName.continents.join(', '), 
                Region: cName.region,
                Landlocked: cName.landlocked,
                Languages: Object.values(cName.languages).join(', '), 
                Capital: cName.capital ? cName.capital[0] : "N/A", 
                Currencies: cName.currencies ? 
                    Object.values(cName.currencies).map(currency => ({
                        Name: currency.name,
                        Symbol: currency.symbol
                    })) : [{ Name: "N/A", Symbol: "N/A" }],
                Map_Img: cName.maps.openStreetMaps
            }));

       
        return data.length ? data[0] : null;
    } catch (error) {
        console.error("Error fetching country details:", error);
        return null;
    }
}
}

export default CountriesStore