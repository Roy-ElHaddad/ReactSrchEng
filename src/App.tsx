import React,{useState} from 'react'
import axios from 'axios'
import Content from './components/SearchBar'
import  Images  from './components/ImageDisplay'

function App() {
  const [images, setimages] = useState([])
  const handleSubmit = async(event:any , searchValue:string) => {
    event.preventDefault()
   try {
     await axios.post('http://localhost:5000/store-data', {
       searchvalue : (searchValue)
      })
     const response = await axios.get('http://localhost:5000/images') 
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
