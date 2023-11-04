import Car from "./Car"
import './CarDetails.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, ChangeEvent } from 'react';

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
        <div className="div-root">
            <div className="{div-left}">
            <Table className="table" striped bordered hover>
                <thead thead-dark>
                    <tr>
                        <th>#</th>
                        <th>Brand</th>
                        <th>Model</th>
                        {/* <th>Dors number</th>
                        <th>Lagguage</th>
                        <th>Engine</th>
                        <th>Fuel Type</th>
                        <th>Production date</th> */}
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                            <tr>  
                                <td>{index +1}</td>                       
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                {/* <td>{car.dorsNumber}</td>
                                <td>{car.lagguageCapacity}</td>
                                <td>{car.engineCapacity}</td>
                                <td>{car.fuelType}</td> */}
                                <Button onClick={detailsHandler}>Details</Button>
                                <Button >Delete</Button>
                            </tr>
                            
                        ))
                    }
                </tbody>


            </Table>

            </div>
            <div className="div-right">
                ASd
            </div>


        </div>
    )
}