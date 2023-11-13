import React from "react";
// import './CarDetails.css';
// import '../dist/CarDetails.css';
import Car from "./Car";
import { Button, Table } from 'react-bootstrap';
import { date } from "yup";
import { format } from 'date-fns';
{/* Petrol, Hybrid, Diesel, LPG */}
            {/* {Hatchback, Sedam, Kombi, SUV, Roadster } */}


function CarDetails(props: { car:  Car ;trigger: any; setTrigger: (arg0: boolean) => void } ){
    let bodycar
    switch (props.car?.bodyType){
    case 0 :
        bodycar = "Hatchback"
        break;
    case 1 :
        bodycar = "Seda"
        break;
    case 2 :
        bodycar = "Kombi"
        break;
    case 3 :
        bodycar = "SUV"
        break;
    case 4 : 
        bodycar = "Roadster" 
        break;
}
let fueltype
    switch (props.car?.fuelType){
    case 0 :
        fueltype = "Petrol"
        break;
    case 1 :
        fueltype = "Hybrid"
        break;
    case 2 :
        fueltype = "Diesel"
        break;
    case 3 :
        fueltype = "LPG"
        break;
}

    return (props.trigger) ? (<div className="details">
        <div className="details-inner"></div>
        <button className="rounded-full bg-blue-100 w-20 hover:bg-blue-300" onClick={() => props.setTrigger (false)}>Hide </button>
        <h4 className="">Brand: {props.car?.brand} </h4> 
        <h4 className="">Model: {props.car?.model}</h4>
        <h4>Dors number: {props.car?.doorsNumber}</h4>
        <h4>Lagguage capacity: {props.car?.luggageCapacity}</h4>
        <h4>Engine Capacity: {props.car?.engineCapacity}</h4>
        <h4>Fuel type: {fueltype}</h4>
        <h4>Production date {format(props.car?.productionDate,'dd/MM/yyyy')}</h4>
        <h4>Fuel consumption: {props.car?.carFuelConsumption}</h4>
        <h4>Body type: {bodycar}</h4>
        
    </div>): (<></>)
    
}
export default CarDetails;

