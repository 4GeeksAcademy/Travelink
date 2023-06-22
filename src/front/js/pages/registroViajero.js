import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../../styles/newPackage.css"
import { Context } from "../store/appContext";

export const RegistroViajero = () => {
    const { store, actions } = useContext(Context);

    const [itemViajero, setItemViajero] = useState({
        type_person: "V",
        cedula: "",
        name: "",
        lastname: "",
        dates_of_birth: "",
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

    const ValidarCamposViajero = () => {
        if (itemViajero.type_person == "" || itemViajero.type_person == null) return false;
        if (itemViajero.cedula == "" || itemViajero.cedula == null) return false;
        if (itemViajero.name == "" || itemViajero.name == null) return false;
        if (itemViajero.lastname == "" || itemViajero.lastname == null) return false;
        if (itemViajero.dates_of_birth == "" || itemViajero.dates_of_birth == null) return false;
        if (itemViajero.phone == "" || itemViajero.phone == null) return false;
        return true;
    };

    const InsertNewViajero = async () => {
        if (ValidarCamposUser() && ValidarCamposViajero()) {
            let user = {
                username: itemUser.username,
                email: itemUser.correo,
                password: itemUser.password,
                rol: 2
                // "is_active" : true
            }
            let resp = await actions.newViajero(itemViajero, user);
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
                <h2 className="mb-3 mt-2 text-center">Registrate</h2>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    type_person: event.target.value
                                });
                            }}>
                                <option value="V" selected>Venezolano</option>
                                <option value="E">Extranjero</option>
                            </select>
                            <label for="floatingSelectGrid">Tipo persona</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    cedula: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Cedula</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    name: event.target.value
                                });
                            }} />
                            <label for="floatingInputGrid">Nombre</label>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    lastname: event.target.value
                                });
                            }} />
                            <label for="floatingInputGrid">Apellido</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    dates_of_birth: event.target.value
                                });
                            }} />
                            <label for="floatingInputGrid">Fecha de Nacimiento</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemViajero({
                                    ...itemViajero,
                                    phone: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Telefono</label>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row m-2 mt-4">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    correo: event.target.value
                                });
                            }} />
                            <label for="floatingInputGrid">Correo Electronico</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    username: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    userconfirm: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Confirmar Usuario</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    password: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Contraseña</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    passconfirm: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Confirmar Contraseña</label>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center  m-2">
                    <div className="d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0">
                        <button  type="submit" onClick={() => InsertNewViajero()} className="col-10 btn btn-travelink btn-outline-info rounded-pill">Aceptar</button>
                    </div>
                    <Link to="/login" className="d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="button" className="col-10 btn btn-travelink btn-outline-info rounded-pill">Volver</button>
                    </Link>
                </div>

                {/* <div className="row d-flex justify-content-center m-2 mt-4">
                    <button type="file" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Aceptar</button>
                    <button type="submit" className="col-md-5 col-sm-5 col-xs-3 mx-1 btn btn-primary">Volver</button>
                </div> */}
            </div>
        </div >
    )
}