import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import "../../styles/newPackage.css"
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

export const RegistroAgencia = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="m-2 text-center">¡Comienza tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Registra tu agencia</h2>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingInputGrid">Nombre</label>
                        </div>
                    </div>
                </div>    

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">RIF</label>
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
                    <div className="col-md-6 col-sm-6 col-xs-2 mb-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" />
                            <label for="floatingSelectGrid">Contraseña <FontAwesomeIcon icon={faEye} /></label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingInputGroup1"/>
                            <label for="floatingInputGroup1">Confirmar Contraseña <FontAwesomeIcon icon={faEyeSlash} /></label>
                        </div>
                    </div>
                    {/* <div className="col-md-2 col-sm-2 col-xs-1">
                        <button className="btn btn-secondary mx-0 my-2 w-75 h-75" ><FontAwesomeIcon icon={faEyeSlash} /></button>
                    </div> */}
                </div>

                <div className="row d-flex justify-content-center m-2">
                    <button type="button" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Aceptar</button>
                    <button type="submit" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Volver</button>
                </div>
            </div>
        </div >
    )
}