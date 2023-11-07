import React from "react";
import './CarEditer.css';
import * as yup from 'yup';
import Car from "./Car";
import { Button, Table } from 'react-bootstrap';
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from'react-hook-form';
function CarEditer(props: { car: Car | undefined; trigger: any; setTrigger: (arg0: boolean) => void }) {
   
   
    const schema = yup.object().shape({ 
        brand: yup.string().required("Brand is required"),
        model : yup.string().required("Model is required"),
        dorsnumber: yup.number().required("Dorsnumber is required").positive().integer().max(10).min(3),
        luggagecapacity: yup.number().required("Luggage capacity is required").positive().integer().max(100).min(13),
        enginecapacity: yup.number().required("Engine capacity is required"),
        fueltype: yup.number().required("Fuel type is required"),
        fuelconsumption: yup.number().required("Fuel consumption is required"),
        bodytype: yup.number().required("Body type is required")
    //     email: yup.string().email().required(),
    //     age: yup.number().required().positive().integer().max(100).min(13),
    //     password: yup.string().required().min(4),
    //     confirmPassword: yup.string().required().oneOf([yup.ref("password")])
          });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver : yupResolver(schema),
        
    });
    const onSubmit = (data:any) => {

        console.log(data);
    }
    
   
   return (props.trigger) ? (<div className="editer">
        <div className="details-inner"></div>
        <Button className="return-btn" onClick={() => props.setTrigger(false)}>Hide </Button>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="brand">Brand:</label>
            <input type="string"  {...register("brand")} defaultValue={props.car?.brand} ></input> <br></br>
            <p>{errors.brand?.message}</p>

            <label htmlFor="model">Model:</label>
            <input  {...register("model")} defaultValue={props.car?.model}></input> <br></br>
            <p>{errors.model?.message}</p>

            <label htmlFor="dorsnumber">Dors number:</label>
            <input  {...register("dorsnumber")} defaultValue={props.car?.doorsNumber}></input> <br></br>
            <p>{errors.dorsnumber?.message}</p>

            <label htmlFor="luggagecapacity">Dors number:</label>
            <input   {...register("luggagecapacity")} defaultValue={props.car?.luggageCapacity}></input> <br></br>
            <p>{errors.luggagecapacity?.message}</p>
            
            <label htmlFor="enginecapacity">Engine Capacity:</label>
            <input   {...register("enginecapacity")} defaultValue={props.car?.engineCapacity}></input> <br></br>
            <p>{errors.enginecapacity?.message}</p>

            <label htmlFor="fueltype">Fuel type:</label>
            <input    {...register("fueltype")} defaultValue={props.car?.fuelType}></input> <br></br>
            <p>{errors.fueltype?.message}</p>

            <label htmlFor="fuelconsumption">Fuel consumption:</label>
            <input  {...register("fuelconsumption")} defaultValue={props.car?.carFuelConsumption}></input> <br></br>
            <p>{errors.fuelconsumption?.message}</p>

            <label htmlFor="bodytype">Body type:</label>
            <input   {...register("bodytype")} defaultValue={props.car?.bodyType}></input>
            <p>{errors.bodytype?.message}</p>

            <input type='submit' /><br />

        </form>
        
    </div>) : (<></>)

}
export default CarEditer;