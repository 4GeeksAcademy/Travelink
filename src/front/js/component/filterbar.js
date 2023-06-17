import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/filterbar.css"


export const Filterbar = () => {
    return (
        <div className="container-fluid ms-0 m-4">
            <h1 className="mb-2 fs-1 text-center">Viaja con tan solo un click.</h1>
            <div className="col-lg-11 col-md-10 col-sm-10 col-xs-6 cajaprincipal my-3 row d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid" />
                            <label htmlFor="floatingInputGrid">Fecha de Inicio</label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid" />
                            <label htmlFor="floatingInputGrid">Fecha de Fin</label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-8 col-sm-10 col-xs-10 mb-2">
                        <Link to="/newPackage">
                            <button className="col-md-10 col-sm-10 col-xs-10 m-2 py-2 btn btn-travelink btn btn-outline-info rounded-pill">Buscar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
