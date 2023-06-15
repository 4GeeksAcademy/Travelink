import React, { Component } from "react";


export const CardDetails = () => {

    return (
        <>
            <div className="m-5">
                <div className="row dflex justify-content-center">
                    <div className="col-md-6 me-3">
                        <img src="https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body text-center border">
                            <h4 className="card-title m-2 mb-3">Full day Morrocoy para 2 personas, no te pierdas esta experiencia.</h4>
                            {/* <p className="card-text m-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            <div className="row m-2">
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div class="form-floating">
                                        <div type="text" class="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">22/06/23</h6>
                                        </div>
                                        <label for="floatingInputGrid">Fecha de Salida</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3">
                                    <div class="form-floating">
                                        <div type="text" class="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">22/06/23</h6>
                                        </div>                                        
                                        <label for="floatingInputGrid">Fecha de Regreso</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-6 col-xs-3 mb-2">
                                    <div class="form-floating">
                                        <input type="number" class="form-control" id="floatingInputGrid" />
                                        <label for="floatingInputGrid">Cantidad de Viajeros</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                                    <div class="form-floating">
                                        <div type="text" class="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">$150</h6>
                                        </div>
                                        <label for="floatingInputGrid">Costo de Reserva</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-3">
                                    <div class="form-floating">
                                        <div type="text" class="form-control" id="floatingInputGrid">
                                            <h6 className="text-end text-muted">$300</h6>
                                        </div>
                                        <label for="floatingInputGrid">Costo Total</label>
                                    </div>
                                </div>
                                <button type="submit" className="col-md-12 col-sm-5 col-xs-3 m-1 btn btn-travelink btn btn-outline-info rounded-pill">Solicitar Reserva</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

