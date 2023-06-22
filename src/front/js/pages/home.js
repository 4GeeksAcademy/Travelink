import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Filterbar } from "../component/filterbar.js";
import { CardHome } from "../component/cardHome.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPackages();
	}, []);

	return (
		<div className="text-center mt-5">
			<Filterbar />
			<div className="container">
				<div className="row col-lg-12 col-md-12 col-sm-6 col-xs-12">
					{store.paquetes.map((item, index) => (
						<CardHome item={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};
