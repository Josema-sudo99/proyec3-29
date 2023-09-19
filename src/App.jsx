import {useEffect, useRef, useState} from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [inputValue, setInputValue] = useState(getRandomNumber (126))

  const url =`https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location, getLocation, hasError] = useFetch(url) 

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSumit = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim())
  }

  return (
  
  <div className='font-0' >
    <img className='img-1' src="img\rickandmorty.jpg" alt="" />
    <h1 className='titulo'></h1>
    <form className='button' onSubmit={handleSumit}>
      <input className='input-1' ref={inputSearch} type="text" />
      <button className='button-1'> Search</button>
    </form>
    {
      hasError
      ? <h2> hey! you mus provide an id 1 to 126 u.u</h2>
      : (
      <>
    <LocationInfo 
    location={location}
    />
    <div className='font-1'> 
      {
        location?.residents.map(url => (
          <ResidentCard 
          key={url}   
          url={url}
          />
        ))
      }
    </div>
    </>
    )
    }
  </div>
  )
}

export default App
