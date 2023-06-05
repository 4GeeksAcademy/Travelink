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
			<Filterbar />
			<div className="container team-area">
				<div className="row">
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
					<CardHome />
				</div>
			</div>
		</div>
	);
};
