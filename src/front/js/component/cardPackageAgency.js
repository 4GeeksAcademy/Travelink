import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { trickText } from "../utils/trickText";

export const CardPackageAgency = (props) => {
    return (
        <div className="card col-lg-5 col-md-5 col-sm-12 col-xs-12 my-2 m-2 p-0" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.paquete.img_paquete} className="img-fluid rounded-start" style={{height: "100%", width: "100%"}} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.paquete.title}</h5>
                        <p className="card-text">{trickText(props.paquete.description)}</p>
                        <div className="container justify-content-end">
                            <Link to="/newPackage">
                                <button className="m-1 btn btn-travelink btn btn-outline-info rounded-pill">Editar</button>
                            </Link>
                            <button className="m-1 btn btn-outline-info rounded-pill">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
