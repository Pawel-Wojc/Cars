import Car from "./Car"
import React, { useEffect, useState,ChangeEvent } from 'react';

interface Props {
    cars: Car[]
    selectedCar: Car | undefined;

}

export default function CarList({ cars }: Props) {
    const [car, setCar] = useState<Car>();
   const detailsHandler = () => {

    return (
        <></>
    )
   }

   const deleteHanddler = () => {

    return (<></>)
   }

    return (
        <div>
            
            {
                cars.map(car => (    
                      
                        <div>     
                            {car.model}
                            <button onClick={detailsHandler}>Details</button>
                            {/* <button onClick={deleteHanddler(car.id)}>Delete</button> */}
                            {/* Typ Paliwa: {car.fuelType}
                        Pojemność silnika: {car.engineCapacity}
                        Pojemność bagażnika: {car.lagguageCapacity}
                        Ilość drzwi: {car.dorsNumber} */}
                        </div>
                ))
            }



            
        </div>
    )
}