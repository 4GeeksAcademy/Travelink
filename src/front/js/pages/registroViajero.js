import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import "../../styles/newPackage.css"
import { Context } from "../store/appContext";

export const RegistroViajero = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="m-2 text-center">¡Comienza tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Registrate</h2>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option value="V" selected>Venezolano</option>
                                <option value="E">Extranjero</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo persona</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Cedula</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Nombre</label>
                        </div>
                    </div>
                </div>    
                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Apellido</label>
                        </div>
                    </div>
                </div>  

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Fecha de Nacimiento</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Telefono</label>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row m-2 mt-4">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Correo Electronico</label>
                        </div>
                    </div>
                </div> 

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Confirmar Usuario</label>
                        </div>
                    </div>
                </div> 
                
                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Contraseña</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Confirmar Contraseña</label>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center m-2 mt-4">
                    <button type="file" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Aceptar</button>
                    <button type="submit" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Volver</button>
                </div>
            </div>
        </div >
    )
}