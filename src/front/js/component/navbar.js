import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import travelinkLogo from "../../img/Travelink.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const LogOut = () => {
		actions.logOut();
		navigate("/");
	}

	return (
		<nav className="navbar navbar-light navbarMain">
			<div className="container">
				<Link to="/" className="link-navbar-brand">
					<img src={travelinkLogo} className="logoNavbar" />
					{/* <span className="navbar-brand mb-0 fs-4 ">TraveLink</span> */}
				</Link>
				<div className="">
					{
						!store.token ?
							<div>
								<Link to="/Unete-como-agencia">
									<button className="mx-3 btn btn-outline-info rounded-pill">¡Unete como agencia!</button>
								</Link>
								<Link to="/login">
									<button className="btn btn-travelink rounded-pill">Iniciar Sesión</button>
								</Link>
							</div>
							:
							<div className="d-flex justify-content-between align-items-center ">
								<span className="me-2">{store.user}</span>
								<button onClick={() => LogOut()} className="btn btn-outline-info rounded-pill m-0">Cerrar Sesión</button>
							</div>
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
