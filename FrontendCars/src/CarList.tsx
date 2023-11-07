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
    const [Car, setCar] = useState<Car>();
    
   
    
    
    // const deleteHandler = (e:any , car: Car) => {  //deleting items
    //     console.log(car.id);
    //     const res = axios.delete('https://localhost:7265/api/cars/'+car.id);
    //     setCars(cars.filter(car => car.id!== car.id));
    //     console.log(res);
    //     return (<></>)
    // }

    function detailsHandler(event:any , car: Car){     
        setCar(car)
        setEditShow(false);
        setDetailsShow(true);
        
        return (<></>)
    }
    function editHandler(event:any , car: Car){  
        console.log(car.id);
        setCar(car)
        setDetailsShow(false);
        setEditShow(true);
        
        return (<></>)
    }

    // function createHandler(event:any){  
    //     setCar(undefined)
    //     setDetailsShow(false);
    //     setEditShow(false);  
    //     setEditShow(true);    

    //     return (<></>)
    // }

    return (
        <div className="container">
            
                
                <div className="list">
                {/* <Button onClick={event  => createHandler(event)}>New</Button>  */}
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
                                {/* <Button onClick={event  => deleteHandler(event, car)}>Delete</Button>                           */}
                            </div>                                      
                        </div>
                                  
                        ))
                }
                 </div>
                <div className="details">
                <CarDetails trigger={DetailsShow} setTrigger = {setDetailsShow} car={Car}></CarDetails>
                <CarEditer trigger={EditShow} setTrigger = {setEditShow} car={Car}></CarEditer>
               
                </div>       
        </div>       
    )
}