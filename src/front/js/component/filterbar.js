import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/filterbar.css"


export const Filterbar = () => {
    return (
        <div className="container-fluid">
            <h1 className="mb-0 fs-1 ">Viaja con tan solo un click.</h1>
            <div className="Form col-12">
                <input className="col-lg-2 col-md-2 col-sm-4 col-xs-10 p-1 px-3 m-3 me-2" list="datalistOptions" id="exampleDataList" placeholder="Lugar de Salida" />
                <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                <i className="fa-solid fa-right-left p-2 m-2"></i>
                <input  className="col-lg-2 col-md-2 col-sm-4 col-xs-10 p-1 px-3 m-2 me-2" list="datalistOptions" id="exampleDataList" placeholder="Lugar de Destino" />
                <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                <input className="col-lg-2 col-md-2 col-sm-4 col-xs-12 p-1 px-3 m-2" type="date" id="birthday" name="birthday" />
                <input className="col-lg-2 col-md-2 col-sm-4 col-xs-12 p-1 px-3 m-2" type="date" id="birthday" name="birthday" />
                <Link to="/demo">
                    <button className="btn btn-travelink btn btn-outline-info rounded-pill m-3 ms-2 px-3">Buscar</button>
                </Link>
            </div>
        </div>
    );
};
