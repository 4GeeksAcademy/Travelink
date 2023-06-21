import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardReserva } from "../component/cardReserva.js"
import { Filterbar } from "../component/filterbar.js";

export const ReservaViajeroList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getReservasByViajero(store.idViajero);
    }, []);

    return(
        <div className="container py-3 d-flex flex-column">
            {
                (store.reservas === undefined || store.reservas.length == 0) ? 
                    <div className="container">
                        <h1>No posee reservas.</h1>
                    </div>
                :
                    <div className="row">
                        {store.reservas.map((item, index) => (
                            <CardReserva paqueteViaje={item} key={index} />
                        ))}
                    </div>
            }
            

        </div>
    )
}