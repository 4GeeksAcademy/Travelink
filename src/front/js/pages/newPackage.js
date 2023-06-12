import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/newPackage.css"
import { Context } from "../store/appContext";

export const NewPackage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="cajaprincipal m-5">
            <div className="cajaformulario m-2">
                <h1 className="m-2 text-center">¡Crea tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Agrega un paquete de viaje</h2>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Titulo</label>
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
                    <div class="col-md-6 col-sm-6 col-xs-3 form-inline">
                        <div class="form-floating mb-2">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="1">Hospedaje</option>
                                <option value="2">Comidas</option>
                                <option value="3">Transporte</option>
                            </select>
                            <label for="floatingSelectGrid">¿Qué incluye tu paquete?</label>
                        </div>
                        <div class="form-floating mb-2">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="1">Terrestre</option>
                                <option value="2">Maritimo</option>
                                <option value="3">Aereo</option>
                                <option value="3">No incluye</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo de Transporte</label>
                        </div>
                        <div class="form-floating mb-2">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="1">Hotel</option>
                                <option value="2">Posada</option>
                                <option value="3">Camping</option>
                                <option value="3">No incluye</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo de Hospedaje</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3 form-inline">
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Lugar de Salida</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input type="date" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Fecha de Inicio</label>
                        </div>
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Fecha de Fin</label>
                        </div>
                    </div>    
                </div>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <textarea type="text" class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                            <label for="FormControlTextarea1">Descripción General</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="Text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Cargar Imagen</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Max de Viajeros</label>
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

                <div className="row m-2">
                    <button type="submit" className="col-md-12 col-sm-12 col-sm-6 m-0 btn btn-primary">Agregar paquete</button>
                </div>
            </div>
        </div >
    )
}