import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPackageAgency } from "../component/cardPackageAgency.js"
import { Filterbar } from "../component/filterbar.js";

export const PackageList = () => {
    return(
        <div className="container py-3 d-flex flex-column">
            <CardPackageAgency/>
            <CardPackageAgency/>
            <CardPackageAgency/>
        </div>
    )
}