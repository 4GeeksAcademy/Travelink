import React, { useContext, useState, useEffect } from "react";
import "../../styles/cardDetails.css"
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import propTypes from 'prop-types';


export const CardDetails = props => {
    const { store, actions } = useContext(Context);

    const [isChecked, setIsChecked] = useState(false);
    const [viajerosReserva, setviajerosReserva] = useState(0);


    useEffect(() => {
        setIsChecked(props.isCheckFav);
    }, [props.isCheckFav]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if ((!isChecked) == true) {
            actions.addFavorite(props.paquete.agencia_id, store.idViajero);
        } else {
            actions.deleteFavorite(props.paquete.agencia_id, store.idViajero);
        }
        // actions.setFav(!isChecked, props.id);
    };

    const sendReserva = () => {
        if (viajerosReserva > 0) {
            actions.addReserva(props.paquete.id, store.idViajero, viajerosReserva);
        }else{
            alert("La cantidad de viajeros a reservar debe ser mayor a cero.");
        }
    }

    return (
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row mb-2">

                    <div className="imgdetails col-lg-6 col-md-6 col-sm-12 mb-4">
                        <div className="flex-column">
                            <img className="card-img-top col-md-12 col-sm-12" src={props.paquete.img_paquete} alt="..." />
                            <div className="border bg-body col-12">
                                <div className="row">
                                    <div className="member-img m-2 col-2">
                                        <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="angenciadetails col-6 card-body">
                                        <p className="card-text">{props.paquete.agencia_name}</p>
                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                            <input type="checkbox" className="btn-check" id={"btncheck"} autoComplete="off" checked={isChecked} onChange={handleCheckboxChange} />
                                            <label className="btn btn-outline-info" htmlFor={"btncheck"}><FontAwesomeIcon icon={faHeart} /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">¿Qué Incluye?</h5>
                                        <p className="card-text">{props.paquete.includes}{props.paquete.type_of_transport}{props.paquete.type_of_accommodation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ maxHeigh: "60vh" }}>
                        <div className="card-body text-center bg-body border">
                            <h5 className="card-title m-1 mb-3">{props.paquete.title}</h5>
                            {/* <p className="card-text m-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{props.paquete.starting_location}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Lugar de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{props.paquete.destination}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Destino</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{(new Date(props.paquete.start_date)).toLocaleDateString("es-VE")}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{(new Date(props.paquete.finish_date)).toLocaleDateString("es-VE")}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Regreso</label>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2">
                                    <div className="col-md-6 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{"$" + props.paquete.reservation_cost}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Reserva c/u</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{"$" + props.paquete.total_cost}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Total</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2">
                                    <div className="col-md-6 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{props.paquete.max_travellers}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Asientos Disponibles</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{props.paquete.max_travellers}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Max. de Viajeros</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2 d-flex justify-content-center">
                                    <div className="col-md-12 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInputGrid" value={viajerosReserva} onChange={event => {
                                                setviajerosReserva(event.target.value);
                                            }}/>
                                            <label for="floatingInputGrid">Viajeros a reservar</label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" onClick={() => sendReserva()} className="col-md-12 col-sm-5 col-xs-3 m-1 btn btn-travelink btn btn-outline-info rounded-pill">Solicitar Reserva</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row my-2">
                    <div className="col-sm-12">
                        <div className="card mb-2">
                            <div className="card-body">
                                <h5 className="card-title">Descripcion general</h5>
                                <p className="card-text">{props.paquete.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

            </div>
        </div>
    )
}

CardDetails.prototype = {
    paquete: propTypes.object,
    isCheckFav: propTypes.bool
}
