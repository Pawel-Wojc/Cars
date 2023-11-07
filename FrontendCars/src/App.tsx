import CarList from './CarList'
import Car from './Car'
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const [Car, setCars] = useState<Car[]>([])

  useEffect (()=> {
    axios.get<Car[]>('https://localhost:7265/api/cars')
    .then(response => {console.log(response.data); setCars(response.data) })
  }, [])

  return (
    <div className="App">
      
        
      <CarList cars={Car} setCars = {setCars} ></CarList>
      
    </div>
  );
}

export default App;
