import CountryInfo from "./countryInfo"

const Results = ({countries, onCountrySelection}) => {
    console.log('countries found:', countries.length);
    if(countries.length > 10){
        return(
            <div>
                <p>Too many matches, specify more.</p>
            </div>
            )
    }else 
    if(countries.length === 1){
        return(
            <div>
                <CountryInfo country={countries[0]} />
            </div>
        )
    }else
    if(countries.length === 0){
        return(
            <div>
                <p>No results.</p>
            </div>
        )
    }
    else{
        return(
            <div>
                {countries.map(c=> 
                    <p key={c.name.official}>{c.name.common} <button onClick={() => onCountrySelection(c.name.common)}>show info</button> </p> 
                )}
            </div>
        )
    }
}

export default Results