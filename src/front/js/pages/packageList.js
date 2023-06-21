import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPackageAgency } from "../component/cardPackageAgency.js"


export const PackageList = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [paquetes, setPaquetes] = useState([]);

    const PaquetesByAgencia = async () => {
        try { 
        const data = await actions.getPackagesByAgencia(params.idAgencia);
        setPaquetes(data);
        } catch (error) {
            console.log("ha ocurrido un error")
        }
    }

    useEffect(() => {
        PaquetesByAgencia();
    }, []);

    // useEffect(() => {
    //     actions.getPackagesByAgencia(store.idAgencia);
    // }, []);

    return (
        <div className="container">
            {/* <CardPackageAgency paquete={paquete}/> */}

            {(paquetes === undefined || paquetes.length == 0) ? 
                <div className="container">
                    <h1>No posee paquetes.</h1>
                </div>
            :
            <div className="container">
                {paquetes.map(paquete => {
                   return <CardPackageAgency paquete={paquete} key={paquete.id} />
                })
                }
            </div>
            }
        </div>
    )
}