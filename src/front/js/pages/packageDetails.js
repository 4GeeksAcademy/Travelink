import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails.js"
import { Filterbar } from "../component/filterbar.js";
import "../../styles/cardDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const PackageDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [isChecked, setIsChecked] = useState(false);
    let [Agencia, setAgencia] = useState([]);
    let [Paquete, setPaquete] = useState([]);

    useEffect(() => {
        getInfoAgency();
        
    }, []);

    const getInfoAgency = async () => {
        let result;
        if (store.paquetes === undefined || store.paquetes.length == 0) {
            result = await actions.findPackage(params.idPackage);
        }
        else {
            result = store.paquetes.find(o => o.id == params.idPackage);
        }
        let paquete_aux = result; //arr.find(o => o.name === 'string 1');
        let agencia_aux = await actions.getAgencyByDetails(paquete_aux.agencia_id);
        isAgenciaFav(agencia_aux);
        setAgencia(agencia_aux);
        setPaquete(paquete_aux);
    };

    const isAgenciaFav = async (agencia) => {
        let result = await actions.getFavoritesAgencies(store.idViajero);
        let isThisAgencyFav = result.find(o => o.id == agencia.id);
        if (isThisAgencyFav == undefined) return;
        else setIsChecked(true);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("Agencia: " + Agencia.id);
        console.log("Viajero: " + store.idViajero);
        if ((!isChecked) == true) {
            actions.addFavorite(Agencia.id, store.idViajero);
        } else {
            actions.deleteFavorite(Agencia.id, store.idViajero);
        }
        // actions.setFav(!isChecked, props.id);
    };

    return (
        <>
            <Filterbar />
            {/* <CardDetails /> */}
            {/* <button type="submit" onClick={() => console.log(Agencia)} className="btn btn-primary flex-fill">Aceptar</button> */}
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row mb-2">

                        <div className="imgdetails p-0 col-lg-6 col-md-6 col-sm-12">
                            <div className="mx-3">
                                <img className="card-img-top col-md-6 col-sm-5" src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg" alt="..." />
                            </div>
                            <div className="row">
                                <div className="member-img m-2 ms-3 col-2">
                                    <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                                </div>
                                <div className="angenciadetails col-6 m-1 card-body">
                                    <p className="card-text">{Agencia.name}</p>
                                </div>
                                <div className="col-2 d-flex justify-content-center align-items-center">
                                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                        <input type="checkbox" className="btn-check" id={"btncheck"} autoComplete="off" checked={isChecked} onChange={handleCheckboxChange} />
                                        <label className="btn btn-outline-info" htmlFor={"btncheck"}><FontAwesomeIcon icon={faHeart} /></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12" style={{ maxHeigh: "60vh" }}>
                            <div className="card-body text-center border">
                                <h5 className="card-title m-2 mb-3">{Paquete.title}</h5>
                                {/* <p className="card-text m-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                <div className="row m-2">
                                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{Paquete.starting_location}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Lugar de Salida</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-3">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{Paquete.destination}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Destino</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{(new Date(Paquete.start_date)).toLocaleDateString("es-VE")}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Fecha de Salida</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-3">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{(new Date(Paquete.finish_date)).toLocaleDateString("es-VE")}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Fecha de Regreso</label>
                                        </div>
                                    </div>

                                    <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2">
                                        <div className="col-md-6 col-sm-4 col-xs-4">
                                            <div className="form-floating">
                                                <div type="text" className="form-control" id="floatingInputGrid">
                                                    <h6 className="text-end text-muted">{"$" + Paquete.reservation_cost}</h6>
                                                </div>
                                                <label for="floatingInputGrid">Reserva c/u</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-4 col-xs-4">
                                            <div className="form-floating">
                                                <div type="text" className="form-control" id="floatingInputGrid">
                                                    <h6 className="text-end text-muted">{"$" + Paquete.total_cost}</h6>
                                                </div>
                                                <label for="floatingInputGrid">Total</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2">
                                        <div className="col-md-6 col-sm-4 col-xs-4">
                                            <div className="form-floating">
                                                <div type="text" className="form-control" id="floatingInputGrid">
                                                    <h6 className="text-end text-muted">{Paquete.max_travellers}</h6>
                                                </div>
                                                <label for="floatingInputGrid">Asientos Disponibles</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-4 col-xs-4">
                                            <div className="form-floating">
                                                <div type="text" className="form-control" id="floatingInputGrid">
                                                    <h6 className="text-end text-muted">{Paquete.max_travellers}</h6>
                                                </div>
                                                <label for="floatingInputGrid">Max. de Viajeros</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2 d-flex justify-content-center">
                                        <div className="col-md-6 col-sm-4 col-xs-4">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="floatingInputGrid" />
                                                <label for="floatingInputGrid">Viajeros a reservar</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="col-md-12 col-sm-5 col-xs-3 m-1 btn btn-travelink btn btn-outline-info rounded-pill">Solicitar Reserva</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="row my-2">
                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">Descripcion general</h5>
                                    <p className="card-text">{Paquete.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">¿Qué Incluye?</h5>
                                    {/* <p className="card-text">{Paquete.includes + " " + Paquete.type_of_transport + " " + Paquete.type_of_accommodation }</p> */}
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                </div>
            </div>
        </>
    )
}