import React, { Component } from "react";
import "../../styles/cardHome.css";
import { trickText } from "../utils/trickText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export const CardHome = (props) => {


    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 my-2 px-2">
            <div className="single-member text-center">
                <img className="team-heading" src={props.item.img_paquete} alt="imagen superior" />
                <div className="member-img">
                    <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                </div>
                <div className="member-info col-lg-12 col-md-12 col-sm-12 col-xs-12 m-1">
                    <h2>{props.item.title}</h2>
                    <h3>Total: {props.item.total_cost}</h3>
                    <p>{trickText(props.item.description)}</p>
                    <Link to={"/packageDetails/" + props.item.id}>
                        <button type="button" className="btn btn-travelink btn btn-outline-info rounded-pill">Saber más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

CardHome.propTypes = {
    item: PropTypes.object
};



