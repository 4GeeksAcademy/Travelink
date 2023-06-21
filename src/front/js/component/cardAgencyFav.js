import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import propTypes from 'prop-types';

export const CardAgencyFav = props => {

	return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center">
                    <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Admin" className="rounded-circle p-1 bg-travelink m-2" width="150" height={"150"} />
                </div>
                <div className="col-md-10">
                    <div className="card-body h-100 d-flex flex-column justify-content-center ms-2">
                        <h5 className="card-title">{props.agenciaFav.name}</h5>
                        <p className="card-text">Telefono: {props.agenciaFav.phone}</p>
                    </div>
                </div>
            </div>
        </div>
        
	);
};

CardAgencyFav.prototype = {
    agenciaFav: propTypes.object,
}
