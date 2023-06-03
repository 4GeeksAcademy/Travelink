import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Filterbar = () => {
	return (
        <div className="container d-flex flex-column justify-content-center mb-4 mt-0">
            <span className="mb-0 fs-1 ">Viaja con tan solo un click</span>
            <div className="my-3">            
                <Link to="/demo">
                    <button className="btn btn-travelink rounded-pill">Buscar</button>
                </Link>
            </div>
        </div>
	);
};
