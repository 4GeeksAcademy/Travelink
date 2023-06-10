import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const NewPackage = () => {
	const { store, actions } = useContext(Context); 

    return (
        <>
            <div className="container-fluid row col-12 d-flex justify-content-center m-5">
                <div className="col-md-6">
                    <label className="form-label">Titulo</label>
                    <input type="Title" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Salida</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Destino</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-6">
                    <label  className="form-label">Max de Viajeros</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder=""/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Tipo de Transporte</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-6">
                    <label className="form-label">Descripción</label>
                    <textarea type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
               
                {/* <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar paquete</button>
                </div>
            </div>
        </>
    )
}