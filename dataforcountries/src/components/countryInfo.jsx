const CountryInfo = ({country}) =>{
    const flagStyle ={
        "width":400,
        "height":300,
        "paddingRight":50
    }
    const coatStyle ={
        "width":400,
        "height":400
    }

    return(
        <div>
            <h1>{country.name.common}</h1>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km²</p>
            <p>Population: {country.population} </p>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang =><li key={lang}>{lang}</li>)}
            </ul>
            <img style={flagStyle} src={country.flags.png} alt={country.flags.alt}/>
            <img style={coatStyle} src={country.coatOfArms.png}/>
        </div>
    )

} 

export default CountryInfo