import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {CardDetails} from "../component/cardDetails.js"
import { Filterbar } from "../component/filterbar.js";

export const PackageDetails = () => {
    return(
        <>
            <Filterbar/>
            <CardDetails/>
        </>
    )
}