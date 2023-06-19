import React, { useContext, useEffect} from "react";
import "../../styles/cardDetails.css"
import { Context } from "../store/appContext";


export const CardDetails = ({paquete}) => {

    return (
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row mb-2">

                    <div className="imgdetails col-lg-6 col-md-6 col-sm-12 mb-2">
                        <div className="flex-column">
                            <img className="card-img-top col-md-12 col-sm-12" src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg" alt="..." />
                            <div className="border bg-body col-12">
                                <div className="row">
                                    <div className="member-img m-2 col-2">
                                        <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="angenciadetails col-8 card-body">
                                        <p className="card-text">Informacion de la Agencia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ maxHeigh: "60vh" }}>
                        <div className="card-body text-center bg-body border">
                            <h5 className="card-title m-1 mb-3">{paquete.title}</h5>
                            {/* <p className="card-text m-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{paquete.starting_location}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Lugar de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{paquete.destination}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Destino</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{paquete.start_date}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">{paquete.finish_date}</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Regreso</label>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 col-md-12 col-sm-12 col-xs-12 mb-2">
                                    <div className="col-md-4 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInputGrid" />
                                            <label for="floatingInputGrid">Viajeros</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4 mb-2">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{paquete.reservation_cost}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Reserva</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4 mb-2">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">{paquete.total_cost}</h6>
                                            </div>
                                            <label for="floatingInputGrid">Total</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <button type="submit" className="col-md-12 col-sm-5 col-xs-3 m-1 btn btn-travelink btn btn-outline-info rounded-pill">Solicitar Reserva</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row my-2">
                    <div className="col-sm-6">
                        <div className="card mb-2">
                            <div className="card-body">
                                <h5 className="card-title">Descripcion general</h5>
                                <p className="card-text">{paquete.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">¿Qué Incluye?</h5>
                                <p className="card-text">{paquete.includes}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

            </div>
        </div>
    )
}

