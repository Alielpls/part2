import { useEffect, useState } from 'react'
import Results from './components/Results'
import countryService from './services/country'

const App = () => {

  const [countryList, setCountryList] = useState([])
  const [value, setValue] = useState('')
  const [countrySelected, setCountrySelected] = useState(null)


  useEffect(() => {
    console.log('use efect')
    countryService.getAll()
      .then(
        initialCountries => setCountryList(initialCountries)
      )
  },[])

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setCountrySelected(null) // remove the selected priority
  }

  const onCountrySelection = (c) => {
      console.log('onCountrySelection - ',c)
      //setValue(c)
      setCountrySelected(c)
  }
  
  // sets a priority for what is clicked to be shown
  const filterReference = countrySelected === null ? value.toLowerCase().trim() : countrySelected.toLowerCase().trim()
  const filteredCountries = value.trim() === '' ? countryList : countryList.filter(c => c.name.common.toLowerCase().includes(filterReference))

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