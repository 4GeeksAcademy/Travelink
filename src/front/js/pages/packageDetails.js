import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {CardDetails} from "../component/cardDetails.js"

export const PackageDetails = () => {
    return(
        <>
            <CardDetails/>
        </>
    )
}