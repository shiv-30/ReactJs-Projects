import React, {useState} from 'react'
import Sresult from './Sresult'

const Search = () => {

  const [img, setImg] = useState("");
  
  function handleChange(event) {
    setImg(event.target.value);
  }

 
  
  
    return (
        <div className="searchbar">
          <input onChange={handleChange}
        type="text" value={img}  placeholder="Search Anything"
          />
        {img !=='' && <Sresult name={img}/>}
        </div>
    )
}

export default Search;
