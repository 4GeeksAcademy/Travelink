import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import propTypes from 'prop-types';

export const CardReserva = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mb-3 col-12 p-0" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.paqueteViaje.img_paquete} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.paqueteViaje.title}</h5>
                        <p className="card-text">{props.paqueteViaje.description}</p>
                        <hr></hr>
                        <p className="card-text">Reservas: {props.paqueteViaje.cant_viajeros_reserva}</p>
                        <p className="card-text">Costo Total a Pagar: {props.paqueteViaje.cant_viajeros_reserva * props.paqueteViaje.reservation_cost}</p>
                        <p className="card-text">Estatus de la Reserva: {props.paqueteViaje.status}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

CardReserva.prototype = {
    paqueteViaje: propTypes.object,
}
