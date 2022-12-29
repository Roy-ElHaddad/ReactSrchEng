import React , {useState} from "react";
import "../index.css";

const SearchBar =  ({handleSubmit}:{handleSubmit:Function}) => {
  const [searchValue , setSearchValue] = useState ('')

  const handleChange = (event:any) => {
      setSearchValue(event.target.value)
    }
  
  const onSubmit = (event:any) => {
    handleSubmit(event, searchValue) 
    const title = document.getElementById("title")
    if (title)
     title.style.display = "block"
  } 

  return(
      <>
      <form onSubmit = {onSubmit}>
       <input className='searchbar' type = "text" id= "fsearch" name="fsearch" onChange={handleChange} />
          <p className= 'titles' id = "title"  > Displaying images of {searchValue} : </p> 
      </form>
      </>
  )
}


export default SearchBar 