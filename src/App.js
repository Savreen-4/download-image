
import React,{useState,useEffect} from 'react';
// import { useState } from 'react/cjs/react.production.min';
import './App.css';

function App() {
  const [download,setDownload] = useState();
 
  useEffect( () => {
    // https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) 
    .then(data => {

        saveUserData(data)
    
    })
    .catch(err=> console.log(err));

} , [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
