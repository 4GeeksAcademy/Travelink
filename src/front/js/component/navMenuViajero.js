import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import travelinkLogo from "../../img/Travelink.png";
// import "../utils/navTopScroll.js";

export const NavMenuViajero = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav id="navbar_top_no" className="navbar navbarMenu navbar-expand-lg navbar-light m-0">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/profileViajero" className="nav-link">
                                <span aria-current="page">Perfil</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/agenciesFavList" className="nav-link">
                                <span aria-current="page">Agencias favoritas</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ViajesRealizadosList" className="nav-link">
                                <span aria-current="page">Viajes Realizados</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reservaViajeroList" className="nav-link">
                                <span aria-current="page">Reservas Enviadas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
