import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

export const RegistroAgencia = () => {
    const { store, actions } = useContext(Context);

    const [itemAgencia, setItemAgencia] = useState({
        nombre: "",
        rif: "",
        telefono: ""
    });

    const [itemUser, setItemUser] = useState({
        username: "",
        userconfirm: "",
        password: "",
        passconfirm: "",
        correo: ""
    });

    const ValidarCamposUser = () => {
        if (itemUser.username == "" || itemUser.username == null) false
        if (itemUser.userconfirm == "" || itemUser.userconfirm == null) false
        if (itemUser.username != itemUser.userconfirm) false
        if (itemUser.password == "" || itemUser.password == null) false
        if (itemUser.passconfirm == "" || itemUser.passconfirm == null) false
        if (itemUser.password != itemUser.passconfirm) false
        if (itemUser.correo == "" || itemUser.correo == null) false
        return true;
    };

    const ValidarCamposAgency = () => {
        if (itemAgencia.nombre == "" || itemAgencia.nombre == null) false
        if (itemAgencia.rif == "" || itemAgencia.rif == null) false
        if (itemAgencia.telefono == "" || itemAgencia.telefono == null) false
        return true;
    };

    const InsertNewAgency = () => {
        console.log("Entre a InsertNewAgency");
        if (ValidarCamposUser() && ValidarCamposAgency())
            actions.newAgency(itemAgencia, itemUser);
        else
            alert("Uno de los campos está vacío o no cumple con las condiciones.");
    };

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="m-2 text-center">¡Comienza tu aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Registra tu agencia</h2>

                <div className="row m-2 mt-4">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemAgencia({
                                    ...itemAgencia,
                                    nombre: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingInputGrid">Nombre</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemAgencia({
                                    ...itemAgencia,
                                    rif: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingSelectGrid">RIF</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemAgencia({
                                    ...itemAgencia,
                                    telefono: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingSelectGrid">Telefono</label>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row m-2 mt-4">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemAgencia,
                                    correo: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingInputGrid">Correo Electronico</label>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemAgencia,
                                    username: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingSelectGrid">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemAgencia,
                                    userconfirm: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingSelectGrid">Confirmar Usuario</label>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-2 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemAgencia,
                                    password: event.target.value
                                });
                            }} />
                            <label htmlFor ="floatingSelectGrid">Contraseña <FontAwesomeIcon icon={faEye} /></label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingInputGroup1" onChange={event => {
                                setItemUser({
                                    ...itemAgencia,
                                    passconfirm: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingInputGroup1">Confirmar Contraseña <FontAwesomeIcon icon={faEyeSlash} /></label>
                        </div>
                    </div>
                    {/* <div className="col-md-2 col-sm-2 col-xs-1">
                        <button className="btn btn-secondary mx-0 my-2 w-75 h-75" ><FontAwesomeIcon icon={faEyeSlash} /></button>
                    </div> */}
                </div>

                <div className="row justify-content-center m-2">
                    <div className="col-md-5 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="submit" onClick={() => InsertNewAgency()} className="btn btn-primary flex-fill">Aceptar</button>
                    </div>
                    <Link to="/login" className="col-md-5 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="button" className="btn btn-primary flex-fill">Volver</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}