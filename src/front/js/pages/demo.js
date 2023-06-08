import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const create_user_test = async () => {
		let user = {
			"username" : "prueba",
			"email" : "prueba@test.com",
			"password" : "prueba123",
			"rol" : "Admin",
			"is_active" : true
		}
		console.log(user);
		const resp = await fetch(process.env.BACKEND_URL + "api/user", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			//redirect: "follow", // manual, *follow, error
			//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(user) // body data type must match "Content-Type" header
		})
		const data = await resp.json();
		console.log(data);

		//console.log(user);
	}

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			{/* <Link to="/"> */}
			<button className="btn btn-primary" onClick={() => create_user_test()}>Back home</button>
			{/* </Link> */}
		</div>
	);
};
