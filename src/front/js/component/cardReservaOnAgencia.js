import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import propTypes from 'prop-types';

export const CardReservaOnAgencia = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mb-3 col-12 p-0" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.paqueteViaje.img_paquete} className="img-fluid rounded-start h-100 w-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{props.paqueteViaje.viajero_fullname + " " + props.paqueteViaje.viajero_cedula}</h5>
                            <p className="card-text">Telefono: {props.paqueteViaje.viajero_phone}</p>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-8">
                                <p className="card-text">Paquete: {props.paqueteViaje.title}</p>
                                <p className="card-text">Reservas: {props.paqueteViaje.cant_viajeros_reserva}</p>
                                <p className="card-text">Costo Total a Pagar: {props.paqueteViaje.cant_viajeros_reserva * props.paqueteViaje.reservation_cost}</p>
                                <p className="card-text">Estatus de la Reserva: {props.paqueteViaje.status}</p>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-travelink btn btn-outline-info rounded-pill" onClick={() => console.log("Hola")}>Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

CardReservaOnAgencia.prototype = {
    paqueteViaje: propTypes.object,
}
