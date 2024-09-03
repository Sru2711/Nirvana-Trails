import axios from "axios"

export  const   getAllCountries = async () => {
     return await axios.get("https://restcountries.com/v3.1/all")
    .then(response=> {
        return response.data
    })
    .catch(error => {
        return error.data
    })
   
  }
    
