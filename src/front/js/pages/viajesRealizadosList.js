import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardReserva } from "../component/cardReserva.js"
import { Filterbar } from "../component/filterbar.js";

export const ViajesRealizadosList = () => {
    const { store, actions } = useContext(Context);

    const [viajes, setViajes] = useState([]);

    useEffect(() => {
        getViajesRealizados();
    }, []);

    const getViajesRealizados = async () => {
        let auxViajes = await actions.getReservasByViajero(store.idViajero);
        let filterlist = auxViajes.filter(x => x.cod_status == 4);
        console.log(filterlist);
        setViajes(filterlist);
    };

    return(
        <div className="container py-3 d-flex flex-column">
            {
                (viajes === undefined || viajes == 0) ? 
                    <div className="container">
                        <h1>No posee viajes realizados.</h1>
                    </div>
                :
                    <div className="row">
                        {/* arr.filter(item => item.arrayWithvalue.indexOf('4') !== -1) */}
                        {viajes.map((item, index) => (
                            <CardReserva paqueteViaje={item} key={index} />
                        ))}
                    </div>
            }
        </div>
    )
}