import React , {useState} from "react";
import "../index.css";

const SearchBar =  ({handleSubmit}:{handleSubmit:Function}) => {
  const [searchValue , setSearchValue] = useState ('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      setSearchValue(event.currentTarget.value)
    }
  
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
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