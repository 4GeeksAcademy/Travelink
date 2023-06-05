import React, { Component } from "react";
import "../../styles/cardHome.css";
import { trickText } from "../utils/trickText";


export const CardHome = () => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
        <div className="single-member text-center">
            <img className="team-heading" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="imagen superior" />
            <div className="member-img">
                <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
            </div>
            <div className="member-info">
                <h2>Tour Roraima</h2>
                <h3>$400</h3>
                <p>{trickText("This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")}</p>
                <button type="button" class="btn btn-outline-info">SABER MAS</button>
            </div>
        </div>
    </div>

)

