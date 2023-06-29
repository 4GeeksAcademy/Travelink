import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { trickText } from "../utils/trickText";
import swal from 'sweetalert';

export const CardPackageAgency = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const DeletePackage = async () => {
        swal({
            title: "¿Estás seguro?",
            text: "Se eliminará el paquete de viaje.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                let resp = await actions.removePackage(props.paquete.id);
                console.log(resp);
                if (resp) {
                    //alert("Bienvenido ha ingresado con exito!");
                    swal("Paquete de viaje eliminado", "Se ha borrado el registro con exito!", "success");
                    navigate('/');
                }
                else {
                    swal("Error", "Intente de nuevo.", "error");
                }
            }
            else
                swal("Canceló la solicitud", "El paquete de viaje no se eliminará.", "info");
        });
        // if (confirm) {
        //     let resp = await actions.removePackage(props.paquete.id);
        //     if (resp) {
        //         //alert("Bienvenido ha ingresado con exito!");
        //         swal("Paquete de viaje eliminado", "Se ha borrado el registro con exito!", "success");
        //         navigate('/');
        //     }
        //     else {
        //         swal("Error", "Intente de nuevo.", "error");
        //     }
        // }
        // else
        //     swal("Canceló la solicitud", "El paquete de viaje no se eliminará.", "info");
        //alert("Uno de los campos está vacío o no cumple con las condiciones.");
    };

    return (
        <div className="m-2">
            <div className="card m-4 mb-3 col-12 p-0" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.paquete.img_paquete} className="img-fluid rounded-start h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{props.paquete.title}</h5>
                                <h5 className="card-title">Destino: {props.paquete.destination}</h5>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-8">
                                    <p className="card-text">{trickText(props.paquete.description)}</p>
                                    <p>Costo de Reserva: {props.paquete.reservation_cost}</p>
                                    <p className="card-text">Costo Total: {props.paquete.total_cost}</p>
                                </div>
                                <div className="col-4">
                                    <Link to={"/edit-Package/" + props.paquete.id}>
                                        <button className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-travelink btn btn-info rounded-pill">Editar</button>
                                    </Link>
                                    <button onClick={() => DeletePackage()} className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-outline-secondary rounded-pill">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
