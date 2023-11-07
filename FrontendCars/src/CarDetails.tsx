import React from "react";
import './CarDetails.css';
import Car from "./Car";
import { Button, Table } from 'react-bootstrap';

function CarDetails(props: { car:  Car | undefined ;trigger: any; setTrigger: (arg0: boolean) => void } ){
    return (props.trigger) ? (<div className="details">
        <div className="details-inner"></div>
        <Button className="return-btn" onClick={() => props.setTrigger (false)}>Hide </Button>
        <h4>Brand: {props.car?.brand} </h4> 
        <h4>Model: {props.car?.model}</h4>
        <h4>Dors number: {props.car?.doorsNumber}</h4>
        <h4>Lagguage capacity: {props.car?.luggageCapacity}</h4>
        <h4>Engine Capacity: {props.car?.engineCapacity}</h4>
        <h4>Fuel type: {props.car?.fuelType}</h4>
        <h4>Fuel consumption: {props.car?.carFuelConsumption}</h4>
        <h4>Body type: {props.car?.bodyType}</h4>
        
    </div>): (<></>)
    
}
export default CarDetails;