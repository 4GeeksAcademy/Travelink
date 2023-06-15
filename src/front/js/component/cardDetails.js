import React, { Component } from "react";
import "../../styles/cardDetails.css"

export const CardDetails = () => {

    return (
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row mb-2">

                    <div className="imgdetails p-0 col-lg-6 col-md-6 col-sm-12">
                        <div className="mx-3">
                            <img className="card-img-top col-md-6 col-sm-5" src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg" alt="..." />
                        </div>
                        <div className="row">
                            <div className="member-img m-2 ms-3 col-2">
                                <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                            </div>
                            <div className="angenciadetails col-8 m-1 card-body">
                                <p className="card-text">Informacion de la Agencia</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ maxHeigh: "60vh" }}>
                        <div className="card-body text-center border">
                            <h5 className="card-title m-2 mb-3">Full day Morrocoy para 2 personas, no te pierdas esta experiencia.</h5>
                            {/* <p className="card-text m-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">Caracas</h6>
                                        </div>
                                        <label for="floatingInputGrid">Lugar de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">Falcón</h6>
                                        </div>
                                        <label for="floatingInputGrid">Destino</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">22/06/23</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3">
                                    <div className="form-floating">
                                        <div type="text" className="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">22/06/23</h6>
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
                                    <div className="col-md-4 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">$150</h6>
                                            </div>
                                            <label for="floatingInputGrid">Reserva</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4">
                                        <div className="form-floating">
                                            <div type="text" className="form-control" id="floatingInputGrid">
                                                <h6 className="text-end text-muted">$300</h6>
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
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">¿Qué Incluye?</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

            </div>
        </div>
    )
}

