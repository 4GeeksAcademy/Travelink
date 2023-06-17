const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: sessionStorage.getItem('user'),
			rol: sessionStorage.getItem('rol'),
			token: sessionStorage.getItem('token'),
			idAgencia: sessionStorage.getItem('idAgencia'),
			idViajero: sessionStorage.getItem('idViajero'),
			message: null,
			paquetes: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				const user = sessionStorage.getItem("user");
				const rol = sessionStorage.getItem("rol");
				if (token && token != "" && token != undefined) {
					setStore({ token: token, user: user, rol: rol })
				}
			},
			login: async (credentials) => {
				try {
					console.log(credentials);
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",
						{
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
							body: JSON.stringify(credentials) // body data type must match "Content-Type" header
						});
					const data = await resp.json();

					alert("Bienvenido ha ingresado con exito!");
					console.log(data);
					sessionStorage.setItem('token', data.token);
					sessionStorage.setItem('user', data.user);
					sessionStorage.setItem('rol', data.rol);
					sessionStorage.setItem('idAgencia', data.idAgencia);
					sessionStorage.setItem('idViajero', data.idViajero);
					setStore({ token: data.token, user: data.user, rol: data.rol, idAgencia: data.idAgencia, idViajero: data.idViajero });
					// don't forget to return something, that is how the async resolves
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error);
					sessionStorage.removeItem('token');
					setStore({ token: null });
				}
			},
			logOut: () => {
				setStore({ token: null, user: null, rol: null });
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('user');
				sessionStorage.removeItem('rol');
			},
			newAgency: async (agency, user) => {
				let data = "";
				console.log(user);
				const respUser = await fetch(process.env.BACKEND_URL + "/api/user", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user) // body data type must match "Content-Type" header
				})
				data = await respUser.json();
				console.log(respUser);
				if (respUser.status != 200) return false;
				agency.user_id = data.id;
				console.log(agency);
				const respAgency = await fetch(process.env.BACKEND_URL + "/api/agency", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(agency) // body data type must match "Content-Type" header
				})
				data = await respAgency.json();
				console.log(data);
				if (respAgency.status != 200) return false;
				alert("Registro realizado satisfactoriamente.");
				return true;
			},
			newViajero: async (viajero, user) => {
				let data = "";
				console.log(user);
				const respUser = await fetch(process.env.BACKEND_URL + "/api/user", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user) // body data type must match "Content-Type" header
				})
				data = await respUser.json();
				console.log(respUser);
				if (respUser.status != 200) return false;
				viajero.user_id = data.id;
				console.log(viajero);
				const respViajero = await fetch(process.env.BACKEND_URL + "/api/viajero", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(viajero) // body data type must match "Content-Type" header
				})
				data = await respViajero.json();
				console.log(data);
				if (respViajero.status != 200) return false;
				alert("Registro realizado satisfactoriamente.");
				return true;
			},

			newPackage: async (nuevoPaquete) => {
				const paquete = {
					title: nuevoPaquete.title,
					destination: nuevoPaquete.destination,
					starting_location: nuevoPaquete.startingLocation,
					start_date: nuevoPaquete.startDate,
					finish_date: nuevoPaquete.finishDate,
					includes: nuevoPaquete.includes,
					type_of_transport: nuevoPaquete.typeOfTransport,
					type_of_accommodation: nuevoPaquete.typeOfAccommodation,
					description: nuevoPaquete.description,
					max_travellers: nuevoPaquete.maxTravellers,
					reservation_cost: nuevoPaquete.reservationCost,
					total_cost: nuevoPaquete.totalCost,
					agencia_id: nuevoPaquete.agencia_id
				}
				console.log(paquete)
				try {
					const store = getStore();
					let resp = await fetch(process.env.BACKEND_URL + "/api/new-package", {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(paquete)
					});
					let data = await resp.json();
					console.log(data)
					if (resp.status != 200) return false;
					alert("Nuevo paquete agregado!");
					return true;
				} catch (err) {
					console.log(err);
				}
			},
		}
	};
};

export default getState;
