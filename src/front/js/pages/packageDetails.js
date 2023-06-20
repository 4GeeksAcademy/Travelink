import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails.js"
import { Filterbar } from "../component/filterbar.js";
import "../../styles/cardDetails.css";

export const PackageDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [paquete, setPaquete] = useState({});
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        actualizarPaquete();
    }, []);

    const actualizarPaquete = async () => {
        let idpaquete = await actions.getPackageDetails(params.idPackage);
        setPaquete(idpaquete);
        isAgenciaFav(idpaquete.agencia_id);
    }

     const isAgenciaFav = async (agencia) => {
        let result = await actions.getFavoritesAgencies(store.idViajero);
        console.log(result);
        let isThisAgencyFav = result.find(o => o.id == agencia);
        console.log(isThisAgencyFav);
        if (isThisAgencyFav == undefined) setIsChecked(false);
        else setIsChecked(true);
    };

    return (
        <>
            <Filterbar />
            <CardDetails paquete = {paquete} isCheckFav = {isChecked} />
        </>
    )
}