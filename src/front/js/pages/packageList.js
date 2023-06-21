import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPackageAgency } from "../component/cardPackageAgency.js"


export const PackageList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPackages();
    }, []);

    return (
        <div className="container">
            {store.paquetes.map((item, index) => (
                <CardPackageAgency item={item} key={index} />
            ))}
        </div>
    )
}