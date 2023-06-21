import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardAgencyFav } from "../component/cardAgencyFav.js"
import { Filterbar } from "../component/filterbar.js";

export const AgenciesFavList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getFavoritesAgencies(store.idViajero);
    }, []);

    return(
        <div className="container py-3 d-flex flex-column">
            {
                (store.agencias_favoritas === undefined || store.agencias_favoritas.length == 0) ? 
                    <div className="container">
                        <h1>No posee agencias marcadas como favoritas.</h1>
                    </div>
                :
                    <div className="row">
                        {store.agencias_favoritas.map((item, index) => (
                            <CardAgencyFav agenciaFav={item} key={index} />
                        ))}
                    </div>
            }
            

        </div>
    )
}