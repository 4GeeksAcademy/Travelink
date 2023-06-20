import React, { Component } from "react";
import "../../styles/cardHome.css";
import { trickText } from "../utils/trickText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export const CardHome = (props) => {

    
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
            <div className="single-member text-center">
                <img className="team-heading" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="imagen superior" />
                <div className="member-img">
                    <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                </div>
                <div className="member-info m-1">
                    <h2>{props.item.title}</h2>
                    <h3>Total: {props.item.totalCost}</h3>
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



