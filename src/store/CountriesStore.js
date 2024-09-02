import { action, makeObservable, observable } from "mobx";
import { getAllCountries as onGetAllCountries } from "../apiCall";
import axios from "axios";
console.log("@@@",onGetAllCountries()) 
 class CountriesStore {
   countries=[];
   countryDetails=[];
   error={};

   constructor() {
    makeObservable(this, {
        countries:observable,
        countryDetails:observable,
        addCountries: action
    })
   }
  async addCountries(){
       return this.countries= await onGetAllCountries()
  }
    
}

export default CountriesStore