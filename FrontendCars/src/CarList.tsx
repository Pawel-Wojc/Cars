import Car from "./Car"
import CarDetails from "./CarDetails"
import CarEditer from "./CarEditer"
import './CarList.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from "axios";

interface Props {
    cars: Car[]
    setCars: (arg0: Car[]) => void;
}

export default function CarList({ cars, setCars }: Props) {


    const [DetailsShow, setDetailsShow] = useState<boolean>(false);
    const [EditShow, setEditShow] = useState<boolean>(false);
    //const [NewShow, setNewShow] = useState<boolean>(false);
    

    // const newCar: Car = { // ciezko 'walczyc' z tym ze car moze byc undefined 
    //     id: "",
    //     brand: "",
    //     model: "",
    //     doorsNumber: 0,
    //     luggageCapacity: 0,
    //     engineCapacity :0,
    //     fuelType: 0,
    //     productionDate: new Date(),
    //     carFuelConsumption: 0,
    //     bodyType: 0
    //   };
      const [selectedcar, setSlectedCar] = useState<Car>(
         { 
            id: "",
            brand: "",
            model: "",
            doorsNumber: 0,
            luggageCapacity: 0,
            engineCapacity :0,
            fuelType: 0,
            productionDate: new Date(),
            carFuelConsumption: 0,
            bodyType: 0
          }

      );
    
    
    const deleteHandler = ( car: Car) => {  //deleting items  
        const res = axios.delete('https://localhost:7265/api/cars/'+car.id);
        setCars(cars.filter(carold => carold!== car));
    }

    function detailsHandler(event:any , car: Car){
        car.productionDate = new Date(car.productionDate.toString());
        setSlectedCar(car)
        setEditShow(false);
        setDetailsShow(true);   

    }

    function editHandler(event:any , car: Car){  
        if (car !== undefined ){
        car.productionDate = new Date(car.productionDate.toString());
        setSlectedCar(car)
        setDetailsShow(false);
        setEditShow(true);  

        }
         
    }

    function createHandler(event:any){ 

        //setSlectedCar(undefined)
        setSlectedCar({ 
            id: "",
            brand: "",
            model: "",
            doorsNumber: 0,
            luggageCapacity: 0,
            engineCapacity :0,
            fuelType: 0,
            productionDate: new Date(),
            carFuelConsumption: 0,
            bodyType: 0
          })
        setDetailsShow(false);
        setEditShow(false);  
        setEditShow(true);    

        
    }

    return (
        <div className="container">
            
                
                <div className="list">
                <Button onClick={event  => createHandler(event)}>New</Button> 
                {cars.map((car, index) => (
                        <div>
                            <div className="list1">
                                { index +1} 
                                {" " + car.brand}
                                {" " + car.model}
                            </div>
                            <div className="list2">
                                <Button onClick={event  => editHandler(event, car)}>Edit</Button>  
                                <Button onClick={event => detailsHandler(event,car)}>Details</Button>
                                <Button onClick={()  => deleteHandler(car)}>Delete</Button>
                            </div>                                      
                        </div>
                                  
                        ))
                }
                 </div>
                <div className="details">
                <CarDetails trigger={DetailsShow} setTrigger = {setDetailsShow} car={selectedcar}></CarDetails>
                <CarEditer trigger={EditShow} setTrigger = {setEditShow} car={selectedcar}></CarEditer>
               
                </div>       
        </div>       
    )
}