import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails.js"
import { Filterbar } from "../component/filterbar.js";
import "../../styles/cardDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const PackageDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [paquete, setPaquete] = useState({});

    const actualizarPaquete = async () => {
        let idpaquete = await actions.getPackageDetails(params.idPackage);
        setPaquete(idpaquete);
        isAgenciafav(idpaquete.agencia_id)}
       
    useEffect(() => {
        actualizarPaquete()
}, []);

    const [isChecked, setIsChecked] = useState(false);

    const isAgenciaFav = async (agencia) => {
        let result = await actions.getFavoritesAgencies(store.idViajero);
        let isThisAgencyFav = result.find(o => o.id == agencia);
        if (isThisAgencyFav == undefined) return;
        else setIsChecked(true);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if ((!isChecked) == true) {
            actions.addFavorita(paquete.agencia_id, store.idViajero);
        } else {
            actions.deleteFavorite(paquete.agencia_id, store.idViajero);
        }
        // actions.setFav(!isChecked, props.id);
    };

    return (
        <>
            <Filterbar />
            <CardDetails paquete = {paquete}/>
        </>
    )
}