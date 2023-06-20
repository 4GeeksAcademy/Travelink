import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/newPackage.css"
import { Context } from "../store/appContext";

export const NewPackage = () => {
    const { store, actions } = useContext(Context);

    const [paquete, setPaquete] = useState({
        title: " ",
        destination: " ",
        startingLocation: " ",
        startDate: new Date(),
        finishDate: new Date(),
        includes: "Todos los servicios",
        typeOfTransport: "no incluye",
        typeOfAccommodation: "no incluye ",
        description: " ",
        maxTravellers: 1,
        reservationCost: 1,
        totalCost: 1,
        agencia_id: store.idAgencia
    });

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="cajaformulario m-2 w-50">
                <h1 className="m-2 text-center">¡Crea tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Agrega un paquete de viaje</h2>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, title: event.target.value })}
                                value={paquete.title || ""} />
                            <label htmlFor="floatingInputGrid">Titulo</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, startingLocation: event.target.value })}
                                value={paquete.startingLocation || ""} >
                                <option selected>Selecciona un estado</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Anzoátegui">Anzoátegui</option>
                                <option value="Apure">Apure</option>
                                <option value="Aragua">Aragua</option>
                                <option value="Barinas">Barinas</option>
                                <option value="Bolívar">Bolívar</option>
                                <option value="Carabobo">Carabobo</option>
                                <option value="Cojedes">Cojedes</option>
                                <option value="Delta Amacuro">Delta Amacuro</option>
                                <option value="Distrito Capital">Distrito Capital</option>
                                <option value="Falcón">Falcón</option>
                                <option value="Guárico">Guárico</option>
                                <option value="Lara">Lara</option>
                                <option value="Mérida">Mérida</option>
                                <option value="Miranda">Miranda</option>
                                <option value="Monagas">Monagas</option>
                                <option value="Nueva Esparta">Nueva Esparta</option>
                                <option value="Portuguesa">Portuguesa</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Táchira">Táchira</option>
                                <option value="Trujillo">Trujillo</option>
                                <option value="Vargas">Vargas</option>
                                <option value="Yaracuy">Yaracuy</option>
                                <option value="Zulia">Zulia</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Lugar de Salida</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, destination: event.target.value })}
                                value={paquete.destination || ""} >
                                <option selected>Selecciona un estado</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Anzoátegui">Anzoátegui</option>
                                <option value="Apure">Apure</option>
                                <option value="Aragua">Aragua</option>
                                <option value="Barinas">Barinas</option>
                                <option value="Bolívar">Bolívar</option>
                                <option value="Carabobo">Carabobo</option>
                                <option value="Cojedes">Cojedes</option>
                                <option value="Delta Amacuro">Delta Amacuro</option>
                                <option value="Distrito Capital">Distrito Capital</option>
                                <option value="Falcón">Falcón</option>
                                <option value="Guárico">Guárico</option>
                                <option value="Lara">Lara</option>
                                <option value="Mérida">Mérida</option>
                                <option value="Miranda">Miranda</option>
                                <option value="Monagas">Monagas</option>
                                <option value="Nueva Esparta">Nueva Esparta</option>
                                <option value="Portuguesa">Portuguesa</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Táchira">Táchira</option>
                                <option value="Trujillo">Trujillo</option>
                                <option value="Vargas">Vargas</option>
                                <option value="Yaracuy">Yaracuy</option>
                                <option value="Zulia">Zulia</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Destino</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, startDate: event.target.value })}
                                value={paquete.startDate || ""} />
                            <label htmlFor="floatingInputGrid">Fecha de Inicio</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, finishDate: event.target.value })}
                                value={paquete.finishDate || ""} />
                            <label htmlFor="floatingInputGrid">Fecha de Fin</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, maxTravellers: event.target.value })}
                                value={paquete.maxTravellers || ""} />
                            <label htmlFor="floatingInputGrid">Max de Viajeros</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, includes: event.target.value })}
                                value={paquete.includes || ""} >
                                <option selected>Todos los servicios</option>
                                <option value="1">Hospedaje</option>
                                <option value="2">Comidas</option>
                                <option value="3">Transporte</option>
                                <option value="5">Bebidas alcoholicas</option>
                                <option value="6">Bebidas no alcoholicas</option>
                                <option value="7">Atencion personalizada</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">¿Qué incluye tu paquete?</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating mb-2">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, typeOfTransport: event.target.value })}
                                value={paquete.typeOfTransport || ""} >
                                <option selected>No incluye</option>
                                <option value="1">Terrestre</option>
                                <option value="2">Maritimo</option>
                                <option value="3">Aereo</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Tipo de Transporte</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, typeOfAccommodation: event.target.value })}
                                value={paquete.typeOfAccommodation || ""} >
                                <option selected>No incluye</option>
                                <option value="1">Hotel</option>
                                <option value="2">Posada</option>
                                <option value="3">Campings</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Tipo de Alojamiento</label>
                        </div>
                    </div>
                </div>



                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <textarea type="text" className="form-control" id="FormControlTextarea1" style={{height: "150px"}}
                                onChange={event => setPaquete({ ...paquete, description: event.target.value })}
                                value={paquete.description || ""} ></textarea>
                            <label htmlFor="FormControlTextarea1">Descripción General</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-4 col-sm-6 col-xs-3 mb-2">
                            <div className="form-floating">
                                <input type="file"  accept="image/*" className="form-control" id="floatingInputGrid"
                                    onChange={event => setPaquete({ ...paquete, imgPaquete: event.target.value })}
                                    value={paquete.imgPaquete || ""} />
                                <label htmlFor="floatingInputGrid">Cargar Imagen</label>
                            </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, reservationCost: event.target.value })}
                                value={paquete.reservationCost || ""} />
                            <label htmlFor="floatingInputGrid">Costo de Reserva</label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, totalCost: event.target.value })}
                                value={paquete.totalCost || ""} />
                            <label htmlFor="floatingInputGrid">Costo Total</label>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center m-2">
                    {/* <button type="file" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-travelink btn btn-outline-info rounded-pill">Cargar Imagen</button> */}
                    <button type="submit" className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-travelink btn btn-outline-info rounded-pill" onClick={() => (paquete.title != " " ? actions.newPackage(paquete) : () => { })}>Agregar paquete</button>
                </div>
            </div>
        </div >
    )
}