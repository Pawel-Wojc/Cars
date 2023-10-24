import React, { useEffect, useState } from 'react';
import CarDetails from './CarDetails'
import Car from './Car'

import './App.css';
import axios from 'axios';

function App() {
    const [Car, setCars] = useState<Car[]>([])

  useEffect (()=> {
    axios.get<Car[]>('https://localhost:7265/api/cars')
    .then(response => {
      console.log(response.data)
      setCars(response.data)
    })
  }, [])
  return (
    <div className="App">
      <CarDetails cars={Car} selectedCar={undefined}></CarDetails>
    </div>
  );
}

export default App;
