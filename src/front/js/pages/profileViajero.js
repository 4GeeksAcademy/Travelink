import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPackageAgency } from "../component/cardPackageAgency.js"
import { Filterbar } from "../component/filterbar.js";
import "../../styles/profileAgency.css";

export const ProfileViajero = () => {
    const { store, actions } = useContext(Context);

    let [infoUser, setInfoUser] = useState();
    let [infoAgencia, setInfoAgencia] = useState({
        creation_date: "",
        id: 0,
        name: "",
        phone: "",
        rif: ""
    });

    useEffect(() => {
        actions.getInfoUser();
        actions.getInfoViajero();
        // setInfoAgencia({ name: auxAgencia.name })
        // console.log(infoAgencia);
    }, []);

    return (
        <div className="container-fluid my-3">
            <div className="row mx-5">
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body pt-5">
                            <div className="d-flex flex-column align-items-center text-center ">
                                <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1682895038~exp=1682895638~hmac=ca33bcd0e0441e977c6ee1aac60c6e86f44c146c68def83605e0c1102b4282d4" alt="Admin" className="rounded-circle p-1 bg-travelink" width="150" height={"150"} />
                                <div className="mt-3">
                                    <h4>{store.infoViajero.name + " " + store.infoViajero.lastname}</h4>
                                    <p className="text-muted font-size-sm">Viajero</p>
                                    <p className="text-secondary mb-1">{"Creado el " + (new Date(store.infoViajero.creation_date)).toLocaleDateString("es-VE")}</p>
                                    {/*<button className="btn btn-primary">Follow</button>
                                    <button className="btn btn-outline-primary">Message</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-8">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Cedula</h6>
                                </div>
                                <div className="col-sm-2 text-secondary">
                                    <input type="text" className="form-control" value={store.infoViajero.type_person} />
                                </div>
                                <div className="col-sm-7 text-secondary">
                                    <input type="text" className="form-control" value={store.infoViajero.cedula} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Nombre</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={store.infoViajero.name} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Apellido</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={store.infoViajero.lastname} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Telefono</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={store.infoViajero.phone} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Fecha de Nacimiento</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="date" className="form-control" data-date-format="DD MMMM YYYY" value={(new Date(store.infoViajero.creation_date)).toLocaleDateString("es-VE")} />
                                </div>
                            </div>
                            <hr className="my-4"></hr>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Nombre de Usuario</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={store.infoUser.username} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Correo Electronico</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={store.infoUser.email} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="button" className="btn btn-travelink rounded-pill px-4" value="Guardar Cambios" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}