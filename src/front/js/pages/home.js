import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Filterbar } from "../component/filterbar.js";
import { CardHome } from "../component/cardHome.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Filterbar/>
			<CardHome/>
			<CardHome/>
		</div>
	);
};
