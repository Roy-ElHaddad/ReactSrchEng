import React,{useState} from 'react'
import axios from 'axios'
import Content from './components/SearchBar'
import  Images  from './components/ImageDisplay'

function App() {
  const [images, setimages] = useState([])
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement> , searchValue:string) => {
    event.preventDefault()
   try {
     await axios.post('http://localhost:8080/store-data', {
       searchvalue : (searchValue)
      })
     const response = await axios.get('http://localhost:8080/images') 
     setimages(response.data)
    } catch (error) {
      console.error(error)
   }
   
  }  

  return (
    <div >
      <Content handleSubmit={handleSubmit}/>
      <Images images={images}/>
    </div>
  )
}

export default App
