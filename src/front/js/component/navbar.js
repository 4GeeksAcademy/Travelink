import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import travelinkLogo from "../../img/Travelink.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/" className="link-navbar-brand">
					<img src={travelinkLogo} className="logoNavbar" />
					{/* <span className="navbar-brand mb-0 fs-4 ">TraveLink</span> */}
				</Link>
				<div className="">
					{
						!store.token ?
							<Link to="/login">
								<button className="btn btn-travelink rounded-pill">Log in</button>
							</Link>
							:
							<button onClick={() => actions.logOut()} className="btn btn-outline-danger rounded-pill">Log Out</button>
					}
					{/* <Link to="/login">
						<button className="btn btn-travelink rounded-pill">Log in</button>
					</Link> */}
					{/* <FontAwesomeIcon className="ms-4" icon={faMagnifyingGlass} style={{ color: "#4dd7fa", }} /> */}
				</div>
			</div>
		</nav>
	);
};
