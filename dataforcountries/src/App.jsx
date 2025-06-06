import { useEffect, useState } from 'react'
import Results from './components/Results'
import countryService from './services/country'

const App = () => {

  const [country, setCountry] = useState([])
  const [value, setValue] = useState('')
  const [countrySelected, setCountrySelected] = useState(null)


  useEffect(() => {
    console.log('use efect')
    countryService.getAll()
      .then(
        initialCountries => setCountry(initialCountries)
      )
  },[])

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setCountrySelected(null)
  }

  const onCountrySelection = (c) => {
      console.log('onCountrySelection - ',c)
      //setValue(c)
      setCountrySelected(c)
  }
  
  const filterReference = countrySelected === null ? value.toLowerCase().trim() : countrySelected.toLowerCase().trim()
  const filteredCountries = value.trim() === '' ? country : country.filter(c => c.name.common.toLowerCase().includes(filterReference))

  return (
    <div>
     <form>
        <label>find countries</label>
        <input value={value} onChange={onChangeHandler} />
        <Results countries={filteredCountries} onCountrySelection={onCountrySelection}/>
     </form>
   </div>
  )
}

export default App