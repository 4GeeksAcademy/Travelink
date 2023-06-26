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
            title: "Está seguro?",
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
        <div className="card col-lg-5 col-md-12 col-sm-12 col-xs-12 my-2 mx-2 p-0" >
            <div className="row g-0 h-100">
                <div className="col-md-4">
                    <img src={props.paquete.img_paquete} className="img-fluid rounded-start" style={{ height: "100%", width: "100%" }} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.paquete.title}</h5>
                        <p className="card-text">{trickText(props.paquete.description)}</p>
                        <div className="container justify-content-end">
                            <Link to={"/edit-Package/" + props.paquete.id}>
                                <button className="m-1 btn btn-travelink btn btn-outline-info rounded-pill">Editar</button>
                            </Link>
                            <button onClick={() => DeletePackage()} className="m-1 btn btn-outline-info rounded-pill">Eliminar</button>

                            {/* <button type="button" className="m-1 btn btn-outline-info rounded-pill" data-toggle="modal" data-target="#exampleModal">
                                Eliminar
                            </button>

                            {/* <!-- Modal --> */}
                            {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
