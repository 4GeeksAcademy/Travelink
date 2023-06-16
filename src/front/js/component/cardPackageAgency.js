import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbarMenu.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import travelinkLogo from "../../img/Travelink.png";
import "../utils/navTopScroll.js";

export const CardPackageAgency = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
        </div>
        
	);
};
