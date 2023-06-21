import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import travelinkLogo from "../../img/Travelink.png";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
  const { store, actions } = useContext(Context);

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate();

  useEffect(() => {
    if (store.token)
      if (store.rol == 1)
        navigate('/profileAgency')
    if (store.rol == 2)
      navigate('/profileViajero')
  }, [store.token])

  return (
    <div className="text-center">
      <div className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={travelinkLogo} className="logo" />
                        {/* <h4 className="mt-1 mb-2 pb-1">TraveLink</h4> */}
                      </div>
                      <hr className="my-4" />
                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example11" className="form-control"
                            placeholder="Username" onChange={event => {
                              setCredentials({
                                ...credentials,
                                username: event.target.value
                              });
                            }} />
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control" placeholder="Password"
                            onChange={event => {
                              setCredentials({
                                ...credentials,
                                password: event.target.value
                              });
                            }} />
                        </div>

                        <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                          <button className="btn btn-primary gradient-custom-2 mb-3" type="button"
                            onClick={() => actions.login(credentials)}>
                            Log in
                          </button>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-2">
                          <p className="mb-0 me-2">Don't have an account?</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-around pb-2">
                          <Link to="/registroAgencia">
                            <button type="button" className="btn btn-outline-info">Nueva Agencia</button>
                          </Link>
                          <Link to="/registroViajero">
                            <button type="button" className="btn btn-outline-info">Nuevo Viajero</button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
