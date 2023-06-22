import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

export const RegistroAgencia = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [itemAgencia, setItemAgencia] = useState({
        name: "",
        rif: "",
        phone: "",
        user_id: ""
    });

    const [itemUser, setItemUser] = useState({
        username: "",
        userconfirm: "",
        password: "",
        passconfirm: "",
        correo: ""
    });

    const ValidarCamposUser = () => {
        if (itemUser.username == "" || itemUser.username == null) return false;
        if (itemUser.userconfirm == "" || itemUser.userconfirm == null) return false;
        if (itemUser.username != itemUser.userconfirm) return false;
        if (itemUser.password == "" || itemUser.password == null) return false;
        if (itemUser.passconfirm == "" || itemUser.passconfirm == null) return false;
        if (itemUser.password != itemUser.passconfirm) return false;
        if (itemUser.correo == "" || itemUser.correo == null) return false;
        return true;
    };

    const ValidarCamposAgency = () => {
        if (itemAgencia.name == "" || itemAgencia.name == null) return false;
        if (itemAgencia.rif == "" || itemAgencia.rif == null) return false;
        if (itemAgencia.phone == "" || itemAgencia.phone == null) return false;
        return true;
    };

    const InsertNewAgency = async () => {
        if (ValidarCamposUser() && ValidarCamposAgency()) {
            let user = {
                username: itemUser.username,
                email: itemUser.correo,
                password: itemUser.password,
                rol: 1
                // "is_active" : true
            }
            let resp = await actions.newAgency(itemAgencia, user);
            if (!resp) {
                alert("Ocurrió un error al intentar registrar el usuario");
                return;
            }
            navigate('/login');
        }
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
                                    name: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingInputGrid">Nombre</label>
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
                            <label htmlFor="floatingSelectGrid">RIF</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemAgencia({
                                    ...itemAgencia,
                                    phone: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingSelectGrid">Telefono</label>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row m-2 mt-4">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    correo: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingInputGrid">Correo Electronico</label>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    username: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingSelectGrid">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    userconfirm: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingSelectGrid">Confirmar Usuario</label>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-2 mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    password: event.target.value
                                });
                            }} />
                            <label htmlFor="floatingSelectGrid">Contraseña <FontAwesomeIcon icon={faEye} /></label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingInputGroup1" onChange={event => {
                                setItemUser({
                                    ...itemUser,
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

                <div className="row d-flex justify-content-center  m-2">
                    <div className=" d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="submit" onClick={() => InsertNewAgency()} className="col-10 btn btn-travelink btn-outline-info rounded-pill">Aceptar</button>
                    </div>
                    <Link to="/login" className="d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="button" className="col-10 btn btn-travelink btn-outline-info rounded-pill">Volver</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}