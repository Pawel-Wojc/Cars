import './CarEditer.css';
import * as yup from 'yup';
import React, { useState, useEffect } from "react";
import Car from "./Car";
import { Button, Table } from 'react-bootstrap';
import {yupResolver} from "@hookform/resolvers/yup"
import DatePicker from "react-datepicker";
import {useForm} from'react-hook-form';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
function CarEditer(props: { car: Car ; trigger: any; setTrigger: (arg0: boolean) => void }) {

   
    // const schema = yup.object().shape({ 
    //     brand: yup.string().required("Brand is required"),
    //     model : yup.string().required("Model is required"),
    //     dorsnumber: yup.number().required("Dorsnumber is required").positive().integer().max(10).min(3),
    //     luggagecapacity: yup.number().required("Luggage capacity is required").positive().integer().max(10000).min(13),
    //     enginecapacity: yup.number().required("Engine capacity is required"),
    //     fueltype: yup.number().required("Fuel type is required"),
    //     fuelconsumption: yup.number().required("Fuel consumption is required"),
    //     bodytype: yup.number().required("Body type is required")
    //       });

    // const {register, handleSubmit, formState:{errors}} = useForm({
    //     resolver : yupResolver(schema),
        
    // });
    const onSubmit = (data) => {
        if (props.car.id == ""){ // if car is new
            const newcar = {
                brand: brand,
                model: model,
                doorsNumber: doorsNumber,
                luggageCapacity: luggageCapacity,
                engineCapacity :engineCapacity,
                fuelType: fuelType,
                productionDate: startDate,
                carFuelConsumption: carFuelConsumption,
                bodyType: bodyType
            }
            const res = axios.post('https://localhost:7265/api/cars', newcar).then((response) => {
                console.log(response.status, response.data.token);
              });
        }else{ //if car is update
            const newcar = {
                id: props.car.id,
                brand: brand,
                model: model,
                doorsNumber: doorsNumber,
                luggageCapacity: luggageCapacity,
                engineCapacity :engineCapacity,
                fuelType: fuelType,
                productionDate: startDate,
                carFuelConsumption: carFuelConsumption,
                bodyType: bodyType
            }
            const res = axios.put('https://localhost:7265/api/cars', newcar).then((response) => {
                console.log(response.status, response.data.token);
              });
              console.log(newcar);
        }
    }
    const handleDateChange = (date) => {
        setStartDate(date);
    }

    useEffect(() => {
        setStartDate(props.car?.productionDate)
        setBrand(props.car?.brand)
        setModel(props.car?.model)
        setDoorsNumber(props.car?.doorsNumber)
        setLuggageCapacity(props.car?.luggageCapacity)
        setEngineCapacity(props.car?.engineCapacity)
        setFuelType(props.car?.fuelType)
        setCarFuelConsumption(props.car?.carFuelConsumption)
        setBodyType(props.car?.bodyType)
        
     }, [ props])

     const [startDate, setStartDate] = useState(props.car?.productionDate);
     const [brand, setBrand] = useState(props.car.brand);
     const [model, setModel] = useState(props.car.model);
     const [doorsNumber, setDoorsNumber] = useState(props.car.doorsNumber);
     const [luggageCapacity, setLuggageCapacity] = useState(props.car.luggageCapacity);
     const [engineCapacity, setEngineCapacity] = useState(props.car.engineCapacity);
     const [fuelType, setFuelType] = useState(props.car.fuelType);
     const [carFuelConsumption, setCarFuelConsumption] = useState(props.car.carFuelConsumption);
     const [bodyType, setBodyType] = useState(props.car.bodyType);
   


    const  handleDorsNumberChange = (event) => {
        const parsedNumber = parseInt(event.target.value);
        setDoorsNumber(isNaN(parsedNumber) ? 3 : parsedNumber);
    }
    const  handleLuggageCapacityChange = (event) => {
        const parsedNumber = parseFloat(event.target.value);
        setLuggageCapacity(isNaN(parsedNumber)? 50 : parsedNumber);
    }
    const  handleEngineCapacityChange = (event) => {
        const parsedNumber = parseFloat(event.target.value);
        setEngineCapacity(isNaN(parsedNumber)? 100 : parsedNumber);
    }
    const  handleFuelTypeChange = (event) => {
        const parsedNumber = parseInt(event.target.value);
        setFuelType(isNaN(parsedNumber)? 0 : parsedNumber);
    }
    const  handleCarFuelConsumptionChange = (event) => {
        const parsedNumber = parseFloat(event.target.value);
        setCarFuelConsumption(isNaN(parsedNumber)? 0 : parsedNumber);
    }
    const  handleBodyTypeChange = (event) => {
        const parsedNumber = parseInt(event.target.value);
        setBodyType(isNaN(parsedNumber)? 0 : parsedNumber);
    }


    
   return (props.trigger) ? (<div className="editer">
        <div className="details-inner"></div>
        <Button className="return-btn" onClick={() => props.setTrigger(false)}>Hide </Button>
        {/* <Button className="return-btn" onClick={onSubmit}>Submit </Button> */}
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={onSubmit}>

            <label htmlFor="brand">Brand:</label>
            <input type="string"  value={brand} onChange={(event) => setBrand(event.target.value)}></input> <br></br>  
            {/* <input type="string"  {...register("brand")} value={brand} onChange={(erd:any) => setBrand(erd)}></input> <br></br>  */}
            {/* <p>{errors.brand?.message}</p> */}

            <label htmlFor="model">Model:</label>
            <input   value={model} onChange={(event) => setModel(event.target.value)}></input> <br></br>
            {/* <input  {...register("model")} value={model} onChange={(event) => setModel(event.target.value)}></input> <br></br> */}
            {/* <p>{errors.model?.message}</p> */}

            <label htmlFor="dorsnumber">Dors number:</label>
            <input  value={doorsNumber} onChange={handleDorsNumberChange}></input> <br></br>
            {/* <input  {...register("dorsnumber")} value={doorsNumber} onChange={handleDorsNumberChange}></input> <br></br> */}
            {/* <p>{errors.dorsnumber?.message}</p> */}

            <label htmlFor="luggagecapacity">Luggage Capacity:</label>
            <input    value={luggageCapacity} onChange={handleLuggageCapacityChange}></input> <br></br>
            {/* <input   {...register("luggagecapacity")} value={luggageCapacity} onChange={handleLuggageCapacityChange}></input> <br></br> */}
            {/* <p>{errors.luggagecapacity?.message}</p> */}
            
            <label htmlFor="enginecapacity">Engine Capacity:</label>
            <input   value={engineCapacity} onChange={handleEngineCapacityChange}></input> <br></br>
            {/* <input   {...register("enginecapacity")} value={engineCapacity} onChange={handleEngineCapacityChange}></input> <br></br> */}
            {/* <p>{errors.enginecapacity?.message}</p> */}

            <label htmlFor="fueltype">Fuel type:</label>
            {/* <input     value={fuelType} onChange={handleFuelTypeChange}></input> <br></br> */}
            {/* Petrol, Hybrid, Diesel, LPG */}
            <select id="fueltype" value={fuelType} onChange={handleFuelTypeChange}>  
                <option value="1">Petrol</option>
                <option value="2">Hybrid</option>
                <option value="3">Diesel</option>
                <option value="4">LPG</option>
            </select> <br></br>
            {/* <input    {...register("fueltype")} value={fuelType} onChange={handleFuelTypeChange}></input> <br></br> */}
            {/* <p>{errors.fueltype?.message}</p> */}

            <DatePicker selected={startDate} onChange={handleDateChange} dateFormat="dd/MM/yyyy" /><br></br>

            <label htmlFor="fuelconsumption">Fuel consumption:</label>
            <input   value={carFuelConsumption} onChange={handleCarFuelConsumptionChange}></input> <br></br>
            {/* <input  {...register("fuelconsumption")} value={carFuelConsumption} onChange={handleCarFuelConsumptionChange}></input> <br></br> */}
            {/* <p>{errors.fuelconsumption?.message}</p> */}

            <label htmlFor="bodytype">Body type:</label>
            {/* <input    value={bodyType} onChange={handleBodyTypeChange}></input> */}
            {/* {Hatchback, Sedam, Kombi, SUV, Roadster } */}
            <select id="bodytype" value={bodyType}  onChange={handleBodyTypeChange}>  
                <option value="1">Hatchback</option>
                <option value="2">Sedan</option>
                <option value="3">Kombi</option>
                <option value="4">SUV</option>
                <option value="5">Roadster</option>
            </select> <br></br>
            {/* <input   {...register("bodytype")} value={bodyType} onChange={handleBodyTypeChange}></input> */}
            {/* <p>{errors.bodytype?.message}</p> */}

            <input type='submit' /><br />

        </form>
        
    </div>) : (<></>)

}
export default CarEditer;