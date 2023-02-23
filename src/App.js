import React from 'react';
import './App.css';
import AllTabs from './components/AllTabs';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  let beersApi = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
  const [data, setData] = useState([])
  
  function Beer (){
    fetch(beersApi)
    .then(response =>  response.json())
    .then(jsonObject => { 
      const beersObj = jsonObject
      setData(beersObj)
  })
    .catch((error) => console.log("Error", error))    
}    

  useEffect(Beer, []) 

  const renderTabs = data.slice(42, 47); 

  return (
    <div className="App">
      <Header />
      <AllTabs  data={renderTabs}/>
      <Footer />
    </div>
  );
}

export default App;