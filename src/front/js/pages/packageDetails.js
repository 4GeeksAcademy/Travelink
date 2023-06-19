import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardDetails } from "../component/cardDetails.js"
import { Filterbar } from "../component/filterbar.js";

export const PackageDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    // let [Agencia, setAgencia] = useState([]);
    const [paquete, setPaquete] = useState({});

    useEffect(() => {
    const actualizarPaquete = async () => setPaquete(await actions.getPackageDetails(params.idPackage));
    actualizarPaquete()
}, []);


    // const getInfoAgency = async () => {
    //     let result;
    //     if (store.paquetes === undefined || store.paquetes.length == 0) {
    //         result = await actions.findPackage(params.idPackage);
    //     }
    //     else {
    //         result = store.paquetes.find(o => o.id == params.idPackage);
    //     }
    //     let paquete_aux = result; //arr.find(o => o.name === 'string 1');
    //     let agencia_aux = await actions.getAgencyByDetails(paquete_aux.agencia_id);
    //     setAgencia(agencia_aux);
    //     setPaquete(paquete_aux);
    //     console.log(Agencia);
    //     console.log(Paquete);
    // };

    return (
        <>
            <Filterbar />
            <CardDetails paquete = {paquete}/>
            <button type="submit" onClick={() => console.log(paquete)} className="btn btn-primary flex-fill">Aceptar</button>
        </>
    )
}