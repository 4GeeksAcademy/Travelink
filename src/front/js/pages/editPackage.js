import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/newPackage.css"
import { Context } from "../store/appContext";
import swal from 'sweetalert';

export const EditPackage = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [paquete, setPaquete] = useState({
        title: " ",
        destination: " ",
        startingLocation: " ",
        // startDate: new Date(),
        // finishDate: new Date(),
        includes: "Todos los servicios",
        typeOfTransport: "no incluye",
        typeOfAccommodation: "no incluye ",
        description: " ",
        maxTravellers: 1,
        reservationCost: 1,
        totalCost: 1,
        agencia_id: store.idAgencia,
        imgPaquete: ""
    });

    const ValidarCampos = () => {
        console.log(paquete);
        if (paquete.title.trim() == "" || paquete.title == null) return false;
        if (paquete.startingLocation.trim() == "" || paquete.startingLocation == null) return false;
        if (paquete.destination.trim() == "" || paquete.destination == null) return false;
        if (paquete.startDate == "" || paquete.startDate == null) return false;
        if (paquete.finishDate == "" || paquete.finishDate == null) return false;
        if (paquete.typeOfTransport == "" || paquete.typeOfTransport == null) return false;
        if (paquete.maxTravellers == "" || paquete.maxTravellers == null) return false;
        if (paquete.includes == "" || paquete.includes == null) return false;
        if (paquete.typeOfAccommodation == "" || paquete.typeOfAccommodation == null) return false;
        if (paquete.description.trim() == "" || paquete.description == null) return false;
        if (paquete.reservationCost == "" || paquete.reservationCost == null) return false;
        if (paquete.totalCost == "" || paquete.totalCost == null) return false;
        if (paquete.imgPaquete == "" || paquete.imgPaquete == null) return false
        return true;
    };

    const EditPackage = async () => {
        if (ValidarCampos()) {
            let resp = await actions.editPackage(paquete, params.idPackage);
            if (resp) {
                //alert("Bienvenido ha ingresado con exito!");
                swal("Paquete de viaje actualizado", "Se ha guardado con exito!", "success");
                navigate('/package-list/' + store.idAgencia);
            }
            else {
                swal("Error", "Intente de nuevo.", "error");
            }
        }
        else
            swal("Atención", "Uno de los campos está vacío o no cumple con las condiciones.", "warning");
        //alert("Uno de los campos está vacío o no cumple con las condiciones.");
    };

    const PaqueteEditado = async () => {
        try {
            console.log(params.idPackage);
            const data = await actions.getEditPackage(params.idPackage);
            console.log(data);
            setPaquete({
                title: data.title,
                destination: data.destination,
                startingLocation: data.starting_location,
                startDate: data.start_date,
                finishDate: data.finish_date,
                includes: data.includes,
                typeOfTransport: data.type_of_transport,
                typeOfAccommodation: data.type_of_accommodation,
                description: data.description,
                maxTravellers: data.max_travellers,
                reservationCost: data.reservation_cost,
                totalCost: data.total_cost,
                agencia_id: store.idAgencia,
                imgPaquete: data.img_paquete
            });
        } catch (error) {
            console.log("ha ocurrido un error" + error)
        }
    }

    useEffect(() => {
        PaqueteEditado();
    }, []);



    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="cajaformulario m-2 w-50">
                <h1 className="m-2 text-center">¡Hagamos mas emocionante esta aventura!</h1>
                <h2 className="mb-3 mt-2 text-center">Edita tu paquete de viajes</h2>

                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, title: event.target.value })}
                                value={paquete.title} />
                            <label htmlFor="floatingInputGrid">Titulo</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, startingLocation: event.target.value })}
                                value={paquete.startingLocation || ""} >
                                <option>Selecciona un estado</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Anzoátegui">Anzoátegui</option>
                                <option value="Apure">Apure</option>
                                <option value="Aragua">Aragua</option>
                                <option value="Barinas">Barinas</option>
                                <option value="Bolívar">Bolívar</option>
                                <option value="Carabobo">Carabobo</option>
                                <option value="Cojedes">Cojedes</option>
                                <option value="Delta Amacuro">Delta Amacuro</option>
                                <option value="Distrito Capital">Distrito Capital</option>
                                <option value="Falcón">Falcón</option>
                                <option value="Guárico">Guárico</option>
                                <option value="Lara">Lara</option>
                                <option value="Mérida">Mérida</option>
                                <option value="Miranda">Miranda</option>
                                <option value="Monagas">Monagas</option>
                                <option value="Nueva Esparta">Nueva Esparta</option>
                                <option value="Portuguesa">Portuguesa</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Táchira">Táchira</option>
                                <option value="Trujillo">Trujillo</option>
                                <option value="Vargas">Vargas</option>
                                <option value="Yaracuy">Yaracuy</option>
                                <option value="Zulia">Zulia</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Lugar de Salida</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, destination: event.target.value })}
                                value={paquete.destination || ""} >
                                <option>Selecciona un estado</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Anzoátegui">Anzoátegui</option>
                                <option value="Apure">Apure</option>
                                <option value="Aragua">Aragua</option>
                                <option value="Barinas">Barinas</option>
                                <option value="Bolívar">Bolívar</option>
                                <option value="Carabobo">Carabobo</option>
                                <option value="Cojedes">Cojedes</option>
                                <option value="Delta Amacuro">Delta Amacuro</option>
                                <option value="Distrito Capital">Distrito Capital</option>
                                <option value="Falcón">Falcón</option>
                                <option value="Guárico">Guárico</option>
                                <option value="Lara">Lara</option>
                                <option value="Mérida">Mérida</option>
                                <option value="Miranda">Miranda</option>
                                <option value="Monagas">Monagas</option>
                                <option value="Nueva Esparta">Nueva Esparta</option>
                                <option value="Portuguesa">Portuguesa</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Táchira">Táchira</option>
                                <option value="Trujillo">Trujillo</option>
                                <option value="Vargas">Vargas</option>
                                <option value="Yaracuy">Yaracuy</option>
                                <option value="Zulia">Zulia</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Destino</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, startDate: event.target.value })}
                                value={paquete.startDate || ""} />
                            <label htmlFor="floatingInputGrid">Fecha de Inicio</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, finishDate: event.target.value })}
                                value={paquete.finishDate || ""} />
                            <label htmlFor="floatingInputGrid">Fecha de Fin</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, maxTravellers: event.target.value })}
                                value={paquete.maxTravellers || ""} />
                            <label htmlFor="floatingInputGrid">Max de Viajeros</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, includes: event.target.value })}
                                value={paquete.includes || ""} >
                                <option>Todos los servicios </option>
                                <option value="Hospedaje ">Hospedaje </option>
                                <option value="Comidas ">Comidas</option>
                                <option value="Transporte ">Transporte</option>
                                <option value="Bebidas Alcoholicas ">Bebidas alcoholicas</option>
                                <option value="Bebidas no alcoholicas ">Bebidas no alcoholicas</option>
                                <option value="Atención Personalizada ">Atencion personalizada</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">¿Qué incluye tu paquete?</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating mb-2">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, typeOfTransport: event.target.value })}
                                value={paquete.typeOfTransport || ""} >
                                <option value="No incluye transporte ">No incluye</option>
                                <option value="Transporte Terrestre ">Terrestre</option>
                                <option value="Transporte Maritimo ">Maritimo</option>
                                <option value="Transporte Aereo ">Aereo</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Tipo de Transporte</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                                onChange={event => setPaquete({ ...paquete, typeOfAccommodation: event.target.value })}
                                value={paquete.typeOfAccommodation || ""} >
                                <option value="No incluye alojamiento ">No incluye</option>
                                <option value="Hotel ">Hotel</option>
                                <option value="Posada ">Posada</option>
                                <option value="Campings ">Campings</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Tipo de Alojamiento</label>
                        </div>
                    </div>
                </div>



                <div className="row m-2">
                    <div className="col-md-12 col-sm-12 col-xs-6">
                        <div className="form-floating">
                            <textarea type="text" className="form-control" id="FormControlTextarea1" style={{ height: "150px" }}
                                onChange={event => setPaquete({ ...paquete, description: event.target.value })}
                                value={paquete.description || ""} ></textarea>
                            <label htmlFor="FormControlTextarea1">Descripción General</label>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-4 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="file" accept="image/*" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, imgPaquete: event.target.files[0] })} />
                            <label htmlFor="floatingInputGrid">Cargar Imagen</label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-3 mb-2">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, reservationCost: event.target.value })}
                                value={paquete.reservationCost || ""} />
                            <label htmlFor="floatingInputGrid">Costo de Reserva</label>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGrid"
                                onChange={event => setPaquete({ ...paquete, totalCost: event.target.value })}
                                value={paquete.totalCost || ""} />
                            <label htmlFor="floatingInputGrid">Costo Total</label>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center m-2">
                    <button type="" className="col-md-12 col-sm-12 col-xs-12 mx-1 btn btn-travelink btn btn-outline-info rounded-pill"
                        onClick={() => EditPackage()}>Editar paquete</button>
                </div>
            </div>
        </div >
    )
}