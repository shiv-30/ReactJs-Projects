import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
        }

        getData();
    });

    return (
      <div>
        <h1>You Choose {num} value</h1> 
        <h2>Name is {name}</h2>
        
        <select value={num} onChange={(event) => {setNum(event.target.value)}}>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
}

export default CompA
