import React from "react";
import "../../styles/homeAgencias.css";
import { Link } from "react-router-dom";

export const HomeAgencias = () => {
    return (
        <div>
            <div>
                <div className="landing-page">
                    <div className="overlay d-flex align-items-center justify-content-center flex-column">
                        <h1>¡Bienvenidos al futuro del turismo!</h1>
                        <p>Únete a esta aventura y descubre las ventajas de tenernos como aliados</p>
                        <Link to="/registroAgencia">
                            <button className="p-3 m-2 btn btn-travelink rounded-pill">¡Regístrate y potencia tu agencia de viajes con Travelink!</button>
                        </Link>
                    </div>
                </div>

                <div className="cards mt-3 mb-3 m-5">
                    <div className="col-12 text-center">
                        <h4 className="m-4">Con Travelink, obtendrás:</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="text-center card-body">
                                        <i className="fas fa-icono"></i>
                                        <h5>¡Mayor visibilidad y alcance para tus paquetes de viajes!</h5>
                                        <p>Con nuestra amplia comunidad de viajeros apasionados, tus ofertas llegarán a un público más amplio que nunca. ¡Prepárate para deslumbrar a potenciales clientes con destinos increíbles y experiencias inolvidables!</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="text-center card-body">
                                        <i className="fas fa-icono"></i>
                                        <h5>¡Acceso a una audiencia interesada en el turismo!</h5>
                                        <p> Nuestra plataforma está diseñada exclusivamente para aquellos que tienen sed de aventura y desean explorar el mundo. Conecta con viajeros apasionados que están ansiosos por descubrir nuevas experiencias y haz que se enamoren de tus apasionantes paquetes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="text-center card-body">
                                        <i className="fas fa-icono"></i>
                                        <h5>¡Aumento de las ventas y oportunidades de negocio!</h5>
                                        <p>Al unir fuerzas con nosotros, abrirás las puertas a un sinfín de oportunidades comerciales. Aprovecha nuestra plataforma para aumentar tus ventas y expandir tu negocio a nivel nacional.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="text-center card-body">
                                        <i className="fas fa-icono"></i>
                                        <h5>¡Fácil gestión y actualización de los paquetes publicados!</h5>
                                        <p>Con nuestra plataforma intuitiva y de fácil uso, podrás gestionar y actualizar tus paquetes de viaje con tan solo unos clics. ¡Deja atrás los tediosos procesos y dedica más tiempo a lo que realmente importa: brindar experiencias extraordinarias a tus clientes!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 mb-2 m-5">
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-center">¡No esperes más y únete a nosotros ahora!</h3>
                        <h6 className="text-center">Descubre una comunidad en crecimiento, alcanza nuevas alturas y deslumbra al mundo con tus increíbles ofertas de viaje.</h6>
                        <Link to="/registroAgencia">
                            <button className="p-3 m-2 btn btn-travelink rounded-pill">¡Regístrate ahora e inicia tu aventura con Travelink!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}