const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: localStorage.getItem('token'),
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
						})
					const data = await resp.json()

					alert("Bienvenido ha ingresado con exito!")

					localStorage.setItem('token', data.token)
					setStore({ token: data.token })
					// don't forget to return something, that is how the async resolves
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error);
					localStorage.removeItem('token');
					setStore({ token: null });
				}
			},
			logOut: () => {
				setStore({ token: null })
				localStorage.removeItem('token')
			},
			newAgency: async (agency, user) => {
				let data = "";
				console.log(user);
				console.log(agency);
				const respUser = await fetch(process.env.BACKEND_URL + "api/user", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user) // body data type must match "Content-Type" header
				})
				data = await respUser.json();
				console.log(respUser);
				if(respUser.status != 200 ) return false;
				agency.user_id = data.id;
				// let agencyAux = {
				// 	name: agency.name,
				// 	rif: agency.rif,
				// 	phone: agency.phone,
				// 	user_id: agency.user_id
				// }
				console.log(agency);
				const respAgency = await fetch(process.env.BACKEND_URL + "api/agency", {
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(agency) // body data type must match "Content-Type" header
				})
				data = await respAgency.json();
				console.log(data);
				if(respAgency.status != 200 ) return false;
				alert("Registro realizado satisfactoriamente.");
				return true;
			}
		}
	};
};

export default getState;
