import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/newPackage.css"
import { Context } from "../store/appContext";

export const NewPackage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="cajaformulario m-2 w-50">
                <h1 className="m-2 text-center">¡Crea tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Agrega un paquete de viaje</h2>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Titulo</label>
                        </div>
                    </div>
                </div>    

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
                            <label for="floatingSelectGrid">Lugar de Salida</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
                            <label for="floatingSelectGrid">Destino</label>
                        </div>
                    </div>
                </div>  

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Fecha de Inicio</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Fecha de Fin</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Max de Viajeros</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="1">Hospedaje</option>
                                <option value="2">Comidas</option>
                                <option value="3">Transporte</option>
                            </select>
                            <label for="floatingSelectGrid">¿Qué incluye tu paquete?</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div class="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating mb-2">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected>No incluye</option>
                                <option value="1">Terrestre</option>
                                <option value="2">Maritimo</option>
                                <option value="3">Aereo</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo de Transporte</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected>No incluye</option>
                                <option value="1">Hotel</option>
                                <option value="2">Posada</option>
                                <option value="3">Camping</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo de Hospedaje</label>
                        </div>
                    </div>
                </div>

                

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <textarea type="text" className="Descripcion" className="form-control" id="FormControlTextarea1" rows="5"></textarea>
                            <label for="FormControlTextarea1">Descripción General</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Costo de Reserva</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Costo Total</label>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center m-2">
                    <button type="file" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Cargar Imagen</button>
                    <button type="submit" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Agregar paquete</button>
                </div>
            </div>
        </div >
    )
}