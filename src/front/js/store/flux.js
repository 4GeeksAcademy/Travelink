const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: sessionStorage.getItem('user'),
			rol: sessionStorage.getItem('rol'),
			token: sessionStorage.getItem('token'),
			idUser: sessionStorage.getItem('idUser'),
			idAgencia: sessionStorage.getItem('idAgencia'),
			idViajero: sessionStorage.getItem('idViajero'),
			infoUser: [],
			infoAgency: [],
			infoViajero: [],
			message: null,
			paquetes: [],
			agencias_favoritas: [],
			reservas: [],
			list_status: []
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
				const idAgencia = sessionStorage.getItem("idAgencia");
				const idViajero = sessionStorage.getItem("idViajero");
				const idUser = sessionStorage.getItem("idUser");
				if (token && token != "" && token != undefined) {
					setStore({ token: token, user: user, rol: rol, idAgencia: idAgencia, idViajero: idViajero, idUser: idUser })
				}
			},

			login: async (credentials) => {
				try {
					console.log(credentials);
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",
						{
							method: "POST", // *GET, POST, PUT, DELETE, etc.
							mode: "cors", // no-cors, *cors, same-origin
							headers: {
								"Content-Type": "application/json",
								// 'Content-Type': 'application/x-www-form-urlencoded',
							},
							body: JSON.stringify(credentials) // body data type must match "Content-Type" header
						});
					const data = await resp.json();
					console.log(resp.status);
					if (resp.status != 200) return false;
					console.log(data);
					sessionStorage.setItem('token', data.token);
					sessionStorage.setItem('user', data.user);
					sessionStorage.setItem('rol', data.rol);
					sessionStorage.setItem('idUser', data.idUser);
					sessionStorage.setItem('idAgencia', data.idAgencia);
					sessionStorage.setItem('idViajero', data.idViajero);
					setStore({ token: data.token, user: data.user, rol: data.rol, idAgencia: data.idAgencia, idViajero: data.idViajero, idUser: data.idUser });
					// don't forget to return something, that is how the async resolves
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ token: null, user: null, rol: null, idUser: null, idAgencia: null, idViajero: null });
					sessionStorage.removeItem('token');
					sessionStorage.removeItem('user');
					sessionStorage.removeItem('rol');
					sessionStorage.removeItem('idUser');
					sessionStorage.removeItem('idAgencia');
					sessionStorage.removeItem('idViajero');
				}
			},

			logOut: () => {
				setStore({ token: null, user: null, rol: null, idUser: null, idAgencia: null, idViajero: null });
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('user');
				sessionStorage.removeItem('rol');
				sessionStorage.removeItem('idUser');
				sessionStorage.removeItem('idAgencia');
				sessionStorage.removeItem('idViajero');
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
				//alert("Registro realizado satisfactoriamente.");
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
				//alert("Registro realizado satisfactoriamente.");
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
					img_paquete: nuevoPaquete.imgPaquete,
					agencia_id: nuevoPaquete.agencia_id
				}
				console.log(paquete)
				try {
					const apiUrl = `https://api.cloudinary.com/v1_1/dsipcdrih/image/upload`

					const formMultimedia = new FormData()

					formMultimedia.append("upload_preset", "sfedcqhp")
					formMultimedia.append("file", paquete.img_paquete)

					const respMediaBucket = await fetch(apiUrl, {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						body: formMultimedia // body data type must match "Content-Type" header
					})

					const dataCloudinary = await respMediaBucket.json()
					console.log(dataCloudinary)

					const store = getStore();
					let resp = await fetch(process.env.BACKEND_URL + "/api/new-package", {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify({
							"title": paquete.title,
							"destination": paquete.destination,
							"starting_location": paquete.starting_location,
							"start_date": paquete.start_date,
							"finish_date": paquete.finish_date,
							"includes": paquete.includes,
							"type_of_transport": paquete.type_of_transport,
							"type_of_accommodation": paquete.type_of_accommodation,
							"description": paquete.description,
							"max_travellers": paquete.max_travellers,
							"reservation_cost": paquete.reservation_cost,
							"total_cost": paquete.total_cost,
							"img_paquete": dataCloudinary.url,
							"agencia_id": paquete.agencia_id
						})
					});
					let data = await resp.json();
					console.log(data)
					if (resp.status != 200) return false;
					//alert("Nuevo paquete agregado!");
					return true;
				} catch (err) {
					console.log(err);
				}
			},

			getPackages: async () => {

				const store = getStore()

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/package", {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
					})
					const data = await resp.json()
					setStore({ paquetes: data })
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			getEditPackage: async (idPackage) => {
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/get-package/" + idPackage, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
					})
					const data = await resp.json()
					setStore({ editpaquete: data })
					console.log(data);
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			editPackage: async (paqueteEditado, idPackage) => {
				// const store = getStore();
				const nuevoPaqueteEditado = {
					title: paqueteEditado.title,
					destination: paqueteEditado.destination,
					starting_location: paqueteEditado.startingLocation,
					start_date: paqueteEditado.startDate,
					finish_date: paqueteEditado.finishDate,
					includes: paqueteEditado.includes,
					type_of_transport: paqueteEditado.typeOfTransport,
					type_of_accommodation: paqueteEditado.typeOfAccommodation,
					description: paqueteEditado.description,
					max_travellers: paqueteEditado.maxTravellers,
					reservation_cost: paqueteEditado.reservationCost,
					total_cost: paqueteEditado.totalCost,
					img_paquete: paqueteEditado.imgPaquete,
					agencia_id: paqueteEditado.agencia_id,
				}
				try {
					const apiUrl = `https://api.cloudinary.com/v1_1/dsipcdrih/image/upload`

					const formMultimedia = new FormData()

					formMultimedia.append("upload_preset", "sfedcqhp")
					formMultimedia.append("file", nuevoPaqueteEditado.img_paquete)

					const respMediaBucket = await fetch(apiUrl, {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						body: formMultimedia // body data type must match "Content-Type" header
					})

					const dataCloudinary = await respMediaBucket.json()
					console.log({
						"title": nuevoPaqueteEditado.title,
						"destination": nuevoPaqueteEditado.destination,
						"starting_location": nuevoPaqueteEditado.starting_location,
						"start_date": nuevoPaqueteEditado.start_date,
						"finish_date": nuevoPaqueteEditado.finish_date,
						"includes": nuevoPaqueteEditado.includes,
						"type_of_transport": nuevoPaqueteEditado.type_of_transport,
						"type_of_accommodation": nuevoPaqueteEditado.type_of_accommodation,
						"description": nuevoPaqueteEditado.description,
						"max_travellers": nuevoPaqueteEditado.max_travellers,
						"reservation_cost": nuevoPaqueteEditado.reservation_cost,
						"total_cost": nuevoPaqueteEditado.total_cost,
						"img_paquete": dataCloudinary.url,
						"agencia_id": nuevoPaqueteEditado.agencia_id,
					})
					let resp = await fetch(process.env.BACKEND_URL + "/api/edit-package/" + idPackage, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"title": nuevoPaqueteEditado.title,
							"destination": nuevoPaqueteEditado.destination,
							"starting_location": nuevoPaqueteEditado.starting_location,
							"start_date": nuevoPaqueteEditado.start_date,
							"finish_date": nuevoPaqueteEditado.finish_date,
							"includes": nuevoPaqueteEditado.includes,
							"type_of_transport": nuevoPaqueteEditado.type_of_transport,
							"type_of_accommodation": nuevoPaqueteEditado.type_of_accommodation,
							"description": nuevoPaqueteEditado.description,
							"max_travellers": nuevoPaqueteEditado.max_travellers,
							"reservation_cost": nuevoPaqueteEditado.reservation_cost,
							"total_cost": nuevoPaqueteEditado.total_cost,
							"img_paquete": dataCloudinary.url,
							"agencia_id": nuevoPaqueteEditado.agencia_id,
						})
					});
					if (resp.status == 200) {
						//alert("Se ha editado el paquete!")
						getActions().getPackages();
						return true;
					} else {
						//alert("No se ha podido editar el paquete!");
						return false;
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			},

			removePackage: async (IdPackage) => {
				try {
					let resp = await fetch(process.env.BACKEND_URL + "/api/remove-package/" + IdPackage, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					//alert("Se ha eliminado el paquete!")
					getActions().getPackages();
					console.log(resp.status);
					if (resp.status != 200) {
						return false;
					}
					return true;
				} catch (err) {
					console.log(err);
					return false;
				}
			},
			getInfoUser: async () => {
				try {
					const store = getStore();
					const vIdUser = {
						idUser: store.idUser
					}
					console.log(vIdUser);
					const resp = await fetch(process.env.BACKEND_URL + "/api/user-info/" + store.idUser, {
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							// Authorization: "Bearer " + store.token
						}
						//body: JSON.stringify(vIdUser)
					});
					const data = await resp.json();
					console.log(data);
					setStore({ infoUser: data });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getInfoAgency: async () => {
				try {
					const store = getStore();
					const vIdAgencia = {
						idAgencia: store.idAgencia
					}
					console.log(vIdAgencia);
					const resp = await fetch(process.env.BACKEND_URL + "/api/agency-info/" + store.idAgencia, {
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							// Authorization: "Bearer " + store.token
						}
						// body: JSON.stringify(vIdAgencia)
					});
					const data = await resp.json();
					console.log(data);
					setStore({ infoAgency: data });

					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getInfoViajero: async () => {
				try {
					const store = getStore();
					const vIdViajero = {
						idViajero: store.idViajero
					}
					console.log(vIdViajero);
					const resp = await fetch(process.env.BACKEND_URL + "/api/viajero-info/" + store.idViajero, {
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							// Authorization: "Bearer " + store.token
						}
						// body: JSON.stringify(vIdViajero)
					});
					const data = await resp.json();
					console.log(data);
					setStore({ infoViajero: data });

					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getAgencyByDetails: async (idAgencia) => {
				try {
					const store = getStore();
					const vIdAgencia = {
						idAgencia: idAgencia
					}
					console.log(vIdAgencia);
					const resp = await fetch(process.env.BACKEND_URL + "/api/agency-info/" + idAgencia, {
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							// Authorization: "Bearer " + store.token
						}
						// body: JSON.stringify(vIdAgencia)
					});
					const data = await resp.json();
					//console.log(data);
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getPackageDetails: async (idPackage) => {
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/package-details/" + idPackage, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
					})
					const data = await resp.json()
					setStore({ paquete: data.paquete })
					return data.paquete;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			addFavorite: async (agencia, viajero) => {
				const favorito = {
					idAgencia: agencia,
					idViajero: viajero
				}
				console.log(favorito)
				try {
					const store = getStore();
					let resp = await fetch(process.env.BACKEND_URL + "/api/favorite", {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(favorito)
					});
					let data = await resp.json();
					console.log(data)
					if (resp.status != 200) {
						//alert("Ocurrio un error!");
						return false;
					}
					//alert("Nuevo paquete agregado!");
					return true;
				} catch (err) {
					console.log(err);
				}
			},
			deleteFavorite: async (agencia, viajero) => {
				const favorito = {
					idAgencia: agencia,
					idViajero: viajero
				}
				console.log(favorito)
				try {
					const store = getStore();
					let resp = await fetch(process.env.BACKEND_URL + "/api/favorite", {
						method: "DELETE",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(favorito)
					});
					let data = await resp.json();
					console.log(data)
					if (resp.status != 200) {
						//alert("Ocurrio un error!");
						return false;
					}
					//alert("Nuevo paquete agregado!");
					return true;
				} catch (err) {
					console.log(err);
				}
			},
			getFavoritesAgencies: async (idViajero) => {

				const store = getStore()

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/favorite-agencies/" + idViajero, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							//"Content-Type": "application/json",
							// "Authorization": "Bearer " + store.token
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						//body: JSON.stringify(credentials) // body data type must match "Content-Type" header
					})
					const data = await resp.json()
					//console.log(data)
					setStore({ agencias_favoritas: data })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			addReserva: async (paquete, viajero, cantViajeros) => {
				const reserva = {
					paquetedeviaje_id: paquete,
					viajero_id: viajero,
					status_id: 0,
					cant_viajeros_reserva: cantViajeros
				}
				try {
					const store = getStore();
					//Estatus: Pendiente(codigo: 1), Confirmado(codigo: 2), Eliminado(codigo: 3)
					//Busco el id del status segun su codigo
					let respStatus = await fetch(process.env.BACKEND_URL + "/api/status/1", {
						method: "GET",
						mode: "cors",
					});
					let dataStatus = await respStatus.json();
					console.log(dataStatus);
					reserva.status_id = dataStatus.id; //asigno el id del estatus a la reserva

					//Registro de la reserva
					let resp = await fetch(process.env.BACKEND_URL + "/api/reserva", {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(reserva)
					});
					let data = await resp.json();
					console.log(data)
					if (resp.status != 200) {
						//alert("Ocurrio un error!");
						return false;
					}
					//alert("Nuevo paquete agregado!");
					return true;
				} catch (err) {
					console.log(err);
				}
			},

			getReservasByViajero: async (idViajero) => {
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/reserva/" + idViajero, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors" // no-cors, *cors, same-origin
					})
					const data = await resp.json()
					setStore({ reservas: data })
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getPackagesByAgencia: async (idAgencia) => {
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/package-list/" + idAgencia, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors" // no-cors, *cors, same-origin
					})
					const data = await resp.json()
					setStore({ paquetesByAgencia: data })
					console.log(data)
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			addStatusOnBD: async () => {
				try {
					const store = getStore()
					const respAllStatus = await fetch(process.env.BACKEND_URL + "/api/status", {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors" // no-cors, *cors, same-origin
					})
					const dataAllStatus = await respAllStatus.json()
					if (respAllStatus.status != 200) {
						
						return;
					}
					if (dataAllStatus != undefined && dataAllStatus.length != 0){
						setStore({ list_status: dataAllStatus });
						return;
					} 
					let listStatus = [
						{
							"cod_status": 1,
							"status": "Pendiente"
						},
						{
							"cod_status": 2,
							"status": "Confirmado"
						},
						{
							"cod_status": 3,
							"status": "Rechazado"
						},
						{
							"cod_status": 4,
							"status": "Viaje Realizado"
						}
					]
					listStatus.forEach(async status => {
						let resp = await fetch(process.env.BACKEND_URL + "/api/status", {
							method: "POST",
							mode: "cors",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(status)
						});
						let data = await resp.json();
					});
					return true;
				} catch (err) {
					console.log(err);
				}
			},

			getReservasByAgencia: async (idAgencia) => {
				const store = getStore()
				try {
					console.log(idAgencia);
					const resp = await fetch(process.env.BACKEND_URL + "/api/reserva-agencia/" + idAgencia, {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors" // no-cors, *cors, same-origin
					})
					const data = await resp.json()
					console.log(data);
					setStore({ reservas: data })
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			updateStatusReserva: async (statusId, idReserva) => {
				const store = getStore();
				try {
					let resp = await fetch(process.env.BACKEND_URL + "/api/update-Status-reserva/" + idReserva, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"status_id": statusId
						})
					});
					if (resp.status == 200) {
						//alert("Se ha editado el paquete!")
						getActions().getReservasByAgencia(store.idAgencia);
						return true;
					} else {
						//alert("No se ha podido editar el paquete!");
						return false;
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			},
		}
	};
};

export default getState;
