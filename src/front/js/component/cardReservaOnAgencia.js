import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import propTypes from 'prop-types';

export const CardReservaOnAgencia = props => {
    const { store, actions } = useContext(Context);

    const confirmReserva = async () => {

        console.log(props.paqueteViaje);
        console.log(store.list_status);
        
        let status = store.list_status.find(x => x.cod_status == 2);
        console.log(status);
        let respond = await actions.updateStatusReserva(status.id, props.paqueteViaje.id);
        if (respond) {
            swal("Reserva confirmada", "Se ha confirmado la reserva.", "success");
        }
        else {
            swal("Error", "Intente de nuevo.", "error");
        }
    }

    const recahzarReserva = async () => {       
        let status = store.list_status.find(x => x.cod_status == 3);

        swal({
            title: "¿Estás seguro?",
            text: "Se rechazará la reserva.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDecline) => {
            if (willDecline) {
                let respond = await actions.updateStatusReserva(status.id, props.paqueteViaje.id);
                if (respond) {
                    swal("Reserva rechazada", "Se ha rechazado la reserva.", "success");
                }
                else {
                    swal("Error", "Intente de nuevo.", "error");
                }
            }
            else
                swal("Canceló la solicitud", "La reserva mantiene su estatus.", "info");
        });


    }

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
                                <button type="submit" className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-travelink btn btn-info rounded-pill" onClick={() => confirmReserva()}>Confirmar</button>
                                <button type="submit" className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-outline-secondary rounded-pill" onClick={() => recahzarReserva()}>Rechazar</button>

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
