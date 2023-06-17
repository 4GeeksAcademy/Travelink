import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import travelinkLogo from "../../img/Travelink.png";
// import "../utils/navTopScroll.js";

export const NavMenuAgency = () => {
    const { store, actions } = useContext(Context);

    return (
        // <nav className="navbar navbar-light navbarMenu navbar-expand-lg px-5">
        //     <div className="container">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //             <span className="nav-item nav-link active">Home <span className="sr-only">(current)</span></span>
        //             <span className="nav-item nav-link">Features</span>
        //             <span className="nav-item nav-link">Pricing</span>
        //             <span className="nav-item nav-link disabled">Disabled</span>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav id="navbar_top_no" className="navbar navbarMenu navbar-expand-lg navbar-light m-0">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/profileAgency" className="nav-link">
                                <span aria-current="page">Perfil</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/newPackage" className="nav-link">
                                <span aria-current="page">Crear Paquete</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/packageList" className="nav-link">
                                <span aria-current="page">Paquetes de Viajes</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <span aria-current="page">Reservas</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-mdb-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                    </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
